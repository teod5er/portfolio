#!/usr/bin/env python3
"""Read the Substack RSS feed and write a cleaned notes.json for the Notes page."""

import json
import re
import time
import urllib.request
import xml.etree.ElementTree as ET
from email.utils import parsedate_to_datetime
from html import escape, unescape
from html.parser import HTMLParser
from pathlib import Path

FEED_URL = "https://peterokutno.substack.com/feed?tag=portfolio"
CONTENT = "{http://purl.org/rss/1.0/modules/content/}encoded"
OUTPUT = Path(__file__).resolve().parent.parent / "notes.json"

ALLOWED = {
    "p": [], "br": [], "strong": [], "b": [], "em": [], "i": [], "u": [], "s": [],
    "h1": [], "h2": [], "h3": [], "h4": [], "h5": [], "h6": [],
    "ul": [], "ol": [], "li": [], "blockquote": [], "hr": [], "code": [], "pre": [],
    "figure": [], "figcaption": [],
    "a": ["href"],
    "img": ["src", "alt", "width", "height"],
}
VOID = {"br", "hr", "img", "source", "wbr"}
# Substack UI chrome inside the post body (expand buttons, icons) is dropped entirely.
SKIP = {"button", "svg", "script", "style", "iframe", "source"}


class Cleaner(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.out = []
        self.skip_depth = 0

    def handle_starttag(self, tag, attrs):
        if self.skip_depth or tag in SKIP:
            if tag not in VOID:
                self.skip_depth += 1
            return
        if tag not in ALLOWED:
            return
        kept = []
        for name, value in attrs:
            if name not in ALLOWED[tag] or value is None:
                continue
            if name in ("href", "src") and not value.startswith("https://"):
                continue
            kept.append(f' {name}="{escape(value)}"')
        if tag == "a":
            kept.append(' target="_blank" rel="noopener noreferrer"')
        if tag == "img":
            kept.append(' loading="lazy"')
        self.out.append(f"<{tag}{''.join(kept)}>")

    def handle_startendtag(self, tag, attrs):
        self.handle_starttag(tag, attrs)
        if tag not in VOID and (self.skip_depth or tag in SKIP):
            self.skip_depth -= 1

    def handle_endtag(self, tag):
        if self.skip_depth:
            self.skip_depth -= 1
            return
        if tag in ALLOWED and tag not in VOID:
            self.out.append(f"</{tag}>")

    def handle_data(self, data):
        if not self.skip_depth:
            self.out.append(escape(data, quote=False))


def clean_html(html):
    cleaner = Cleaner()
    cleaner.feed(html or "")
    cleaner.close()
    return re.sub(r"<p>\s*</p>", "", "".join(cleaner.out))


def fetch_feed():
    # Substack serves a stale cached feed after a post is edited; a unique query string bypasses it.
    request = urllib.request.Request(
        f"{FEED_URL}&_={int(time.time())}",
        headers={"User-Agent": "Mozilla/5.0 (portfolio notes sync)"},
    )
    with urllib.request.urlopen(request, timeout=30) as response:
        return ET.fromstring(response.read())


def parse_item(item):
    subtitle = unescape(item.findtext("description", "")).strip()
    # Substack fills the description with "Get <name> in your inbox" when a post has no subtitle.
    if re.fullmatch(r"Get .+ in your inbox", subtitle):
        subtitle = ""
    return {
        "title": unescape(item.findtext("title", "")),
        "subtitle": subtitle,
        "date": parsedate_to_datetime(item.findtext("pubDate")).isoformat(),
        "url": item.findtext("link", ""),
        "html": clean_html(item.findtext(CONTENT)),
    }


def main():
    posts = [parse_item(item) for item in fetch_feed().iter("item") if item.findtext(CONTENT)]
    posts.sort(key=lambda post: post["date"], reverse=True)
    OUTPUT.write_text(json.dumps(posts, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    print(f"Wrote {len(posts)} posts to {OUTPUT.name}")


if __name__ == "__main__":
    main()
