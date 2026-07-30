 const counters = document.querySelectorAll('.count');

        function animateCounter(counter) {
            const target = +counter.getAttribute('data-target');
            let count = 0;

            const stepTime = Math.max(20, 2000 / target);
            const interval = setInterval(() => {
                count++;
                counter.textContent = count;

                if (count >= target) {
                    counter.textContent = target;
                    clearInterval(interval);
                }
            }, stepTime);
        }

        function checkCounters() {
            counters.forEach(counter => {
                const rect = counter.getBoundingClientRect();
                const windowHeight = window.innerHeight;
                if (rect.top < windowHeight && !counter.classList.contains('counted')) {
                    counter.classList.add('counted');
                    animateCounter(counter);
                }
            });
        }

        window.addEventListener('scroll', checkCounters);
        window.addEventListener('load', checkCounters);
