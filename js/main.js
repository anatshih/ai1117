document.addEventListener('DOMContentLoaded', function () {
    // تبويبات المسارات في صفحة مشروع المسار
    const tabButtons = document.querySelectorAll('[data-track-tab]');
    const panels = document.querySelectorAll('.project-track-panel');

    function activateTrack(trackKey) {
        // تفعيل زر المسار
        tabButtons.forEach(btn => {
            if (btn.dataset.trackTab === trackKey) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        // إظهار/إخفاء لوحات المسارات
        panels.forEach(panel => {
            if (panel.dataset.trackPanel === trackKey) {
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        });
    }

    // ربط أزرار التبويب بالوظيفة
    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const trackKey = btn.dataset.trackTab;
            activateTrack(trackKey);
        });
    });

    // تفعيل أول مسار تلقائيًا إن وجد
    if (tabButtons.length && panels.length) {
        activateTrack(tabButtons[0].dataset.trackTab);
    }

    // إدارة "اقرأ المزيد" في بطاقات الأسئلة (Toggle لكل بطاقة)
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const body = document.getElementById(targetId);
            if (!body) return;

            const labelSpan = button.querySelector('.label');
            const iconSpan = button.querySelector('.icon');

            const isOpen = body.classList.contains('open');

            if (isOpen) {
                // إخفاء التفاصيل
                body.classList.remove('open');
                if (labelSpan) labelSpan.textContent = 'اقرأ المزيد';
                if (iconSpan) iconSpan.textContent = '⬇️';
            } else {
                // إظهار التفاصيل
                body.classList.add('open');
                if (labelSpan) labelSpan.textContent = 'إخفاء التفاصيل';
                if (iconSpan) iconSpan.textContent = '⬆️';
            }
        });
    });
});
