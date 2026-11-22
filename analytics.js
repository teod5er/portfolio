// Google Analytics 4 bez kolačića (Consent Mode v2, sve pohrane odbijene).
// GA tada šalje anonimne "cookieless pings": nema kolačića ni bannera,
// a Google iz njih modelira brojke. Učitava se na svim stranicama.
(function () {
  var GA_ID = "G-ZZLX2HSYN1";

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  // Mora biti prije configa: ništa se ne sprema u preglednik
  gtag("consent", "default", {
    analytics_storage: "denied",
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
  });

  gtag("js", new Date());
  gtag("config", GA_ID, {
    // Na index.html i project.html page view šalje script.js za svaki prikaz (About, Work, Notes, projekt)
    send_page_view: !window.GA_MANUAL_PAGE_VIEWS,
  });

  var script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(script);
})();
