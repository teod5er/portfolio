

document.addEventListener('DOMContentLoaded', () => {
    const marqueeContainer = document.querySelector('.marquee-container');

    if (marqueeContainer) {
        marqueeContainer.addEventListener('click', () => {
            const email = "teo_peter@outlook.com";
            navigator.clipboard.writeText(email).then(() => {
                // Visual feedback
                const emailElements = document.querySelectorAll('.large-email');
                emailElements.forEach(el => {
                    const originalText = el.textContent;
                    el.style.color = "#ccc"; // Grey out briefly
                    setTimeout(() => {
                        el.style.color = "#000";
                    }, 200);
                });

                showToast("Email copied to clipboard.");
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    }

    // Toast Notification Logic
    function showToast(message) {
        // Check if toast element exists, if not create it
        let toast = document.getElementById('toast-notification');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'toast-notification';
            document.body.appendChild(toast);
        }

        // Set message
        toast.textContent = message;

        // Show toast
        // Use a small timeout to allow CSS transition to work if just appended
        setTimeout(() => {
            toast.classList.add('show');
        }, 10);

        // Hide after 3 seconds
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    // Mobile Hamburger Menu Toggle
    const hamburgerBtn = document.querySelector('.hamburger-btn');
    const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');

    if (hamburgerBtn && mobileNavOverlay) {
        hamburgerBtn.addEventListener('click', () => {
            mobileNavOverlay.classList.toggle('active');
            // Toggle aria-expanded for accessibility
            const isExpanded = mobileNavOverlay.classList.contains('active');
            hamburgerBtn.setAttribute('aria-expanded', isExpanded);
        });

        // Close overlay when clicking on a nav link
        const mobileNavLinks = mobileNavOverlay.querySelectorAll('a');
        mobileNavLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileNavOverlay.classList.remove('active');
                hamburgerBtn.setAttribute('aria-expanded', 'false');
            });
        });
    }

    // Navigation Hide/Show on Scroll (logo stays visible)
    let lastScrollY = window.scrollY;
    let ticking = false;

    const nav = document.querySelector('nav');

    function updateNavVisibility() {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down & past threshold
            nav.classList.add('nav-hidden');
        } else if (currentScrollY < lastScrollY) {
            // Scrolling up
            nav.classList.remove('nav-hidden');
        }

        lastScrollY = currentScrollY;
        ticking = false;
    }

    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateNavVisibility);
            ticking = true;
        }
    });

    // Project Page Header Scroll Effect
    const projectTitle = document.querySelector('.header-project-title');
    const header = document.querySelector('header');

    if (projectTitle && header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 200) {
                projectTitle.classList.add('visible');
                header.classList.add('project-scrolled');
            } else {
                projectTitle.classList.remove('visible');
                header.classList.remove('project-scrolled');
            }
        });
    }

    // Scroll Fade-In Animation
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe project cards on index page
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => fadeInObserver.observe(card));

    // Observe gallery items on project pages
    const galleryItems = document.querySelectorAll('.img-large');
    galleryItems.forEach(item => fadeInObserver.observe(item));

    // Clean URL (remove .html from address bar)
    if (window.location.pathname.endsWith('.html')) {
        const cleanUrl = window.location.pathname.replace(/\.html$/, '');
        window.history.replaceState(null, '', cleanUrl);
    }
});

