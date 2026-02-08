

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
});

