document.addEventListener('DOMContentLoaded', function () {
    const nav = document.querySelector('.main-nav');
    const activeLink = nav && nav.querySelector('a.active');

    if (nav && activeLink && nav.scrollWidth > nav.clientWidth) {
        const navBox = nav.getBoundingClientRect();
        const linkBox = activeLink.getBoundingClientRect();
        nav.scrollLeft += (linkBox.left + linkBox.width / 2) - (navBox.left + navBox.width / 2);
    }

    const revealItems = document.querySelectorAll('.bento-card, .track-card, .resource-card, .quick-track, .faq-item, .placeholder-card, .delivery-list li');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12 });

        revealItems.forEach(item => {
            item.classList.add('reveal-target');
            observer.observe(item);
        });
    }

    const tabButtons = document.querySelectorAll('[data-track-tab]');
    const panels = document.querySelectorAll('.project-track-panel');

    function activateTrack(trackKey) {
        tabButtons.forEach(button => {
            button.classList.toggle('active', button.dataset.trackTab === trackKey);
        });

        panels.forEach(panel => {
            panel.classList.toggle('active', panel.dataset.trackPanel === trackKey);
        });
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            activateTrack(button.dataset.trackTab);
        });
    });

    if (tabButtons.length && panels.length) {
        activateTrack(tabButtons[0].dataset.trackTab);
    }

    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const toggle = item.querySelector('.faq-toggle');
        const icon = item.querySelector('.faq-icon');

        if (!toggle) return;

        toggle.addEventListener('click', () => {
            const isOpen = item.classList.toggle('open');
            if (icon) icon.textContent = isOpen ? '-' : '+';
        });
    });
});
