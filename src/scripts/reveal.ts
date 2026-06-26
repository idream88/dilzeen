function initReveal() {
	const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]');

	if (reducedMotion) {
		revealElements.forEach((el) => el.classList.add('is-visible'));
		return;
	}

	revealElements.forEach((el) => {
		if (el.hasAttribute('data-reveal-immediate')) {
			requestAnimationFrame(() => el.classList.add('is-visible'));
		}
	});

	const observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add('is-visible');
					observer.unobserve(entry.target);
				}
			});
		},
		{ threshold: 0.12, rootMargin: '0px 0px -4% 0px' },
	);

	revealElements.forEach((el) => {
		if (!el.hasAttribute('data-reveal-immediate')) {
			observer.observe(el);
		}
	});
}

initReveal();
document.addEventListener('astro:after-swap', initReveal);
