import $ from '../core';

$.prototype.carousel = function() {
	for(let i = 0; i < this.length; i++) {
		const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
		const slides = this[i].querySelectorAll('.carousel-item');
		const slidesField = this[i].querySelector('.carousel-slides');
		const dots = this[i].querySelectorAll('.carousel-indicators li');
		const sliderId = this[i].getAttribute('id');

		const bindDots = () => {
			dots.forEach(dot => dot.classList.remove('active'));
			dots[slideIndex].classList.add('active');
		};

		slidesField.style.width = 100 * slides.length + '%';
		slides.forEach(slide => slide.style.width = width);

		let offset = 0,
		    slideIndex = 0;

		$(this[i].querySelector('[data-slide="next"]')).click(e => {
			e.preventDefault();
			offset == (+width.replace(/\D/g, '') * (slides.length - 1)) ? offset = 0 : offset += +width.replace(/\D/g, '')
				
			slidesField.style.transform = `translateX(-${offset}px)`;

			slideIndex == slides.length - 1 ? slideIndex = 0 : slideIndex++;
			bindDots();
		}); 

		$(this[i].querySelector('[data-slide="prev"]')).click(e => {
			e.preventDefault();
			offset == 0 ? offset = +width.replace(/\D/g, '') * (slides.length - 1) : offset -= +width.replace(/\D/g, '');

			slidesField.style.transform = `translateX(-${offset}px)`;

			slideIndex == 0 ? slideIndex = slides.length - 1 : slideIndex--;
			bindDots();
		}); 

		$(`#${sliderId} .carousel-indicators li`).click(e => {
			const slideTo = e.target.getAttribute('data-slide-to');
			slideIndex = slideTo;
			offset = +width.replace(/\D/g, '') * slideTo;

			slidesField.style.transform = `translateX(-${offset}px)`;
			bindDots();
		}); 

	};
};

$('.carousel').carousel();