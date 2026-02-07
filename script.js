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
                    el.style.color = "#8c8c8c"; // Grey out briefly
                    setTimeout(() => {
                        el.style.color = "#000";
                    }, 200);
                });
                alert("Email copied to clipboard!"); // Simple feedback
            }).catch(err => {
                console.error('Failed to copy: ', err);
            });
        });
    }
});
