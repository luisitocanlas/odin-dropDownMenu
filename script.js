// script.js
document.addEventListener('DOMContentLoaded', function () {
	const dropdowns = document.querySelectorAll('.dropdown');

	dropdowns.forEach((dropdown) => {
		const action = dropdown.getAttribute('data-action');
		const btn = dropdown.querySelector('.dropdown-btn');
		const content = dropdown.querySelector('.dropdown-content');

		if (action === 'click') {
			btn.addEventListener('click', function () {
				dropdown.classList.toggle('visible');
			});
		} else if (action === 'hover') {
			btn.addEventListener('mouseenter', function () {
				dropdown.classList.add('visible');
			});

			dropdown.addEventListener('mouseleave', function () {
				dropdown.classList.remove('visible');
			});
		}
	});
});
