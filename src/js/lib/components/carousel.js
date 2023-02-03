import $ from '../core';

$.prototype.carousel = function() {
	for(let i = 0; i < this.length; i++) {
		const width = window.getComputedStyle(this[i].querySelector('.carousel-inner')).width;
		const slides = this[i].querySelectorAll('.carousel-item');
		const slidesField = this[i].querySelector('.carousel-slides');

		slidesField.style.width = 100 * slides.length + '%';
		slides.forEach(slide => {
			slide.style.width = width;
		});

		let offset = 0;

		$(this[i].querySelector('[data-slide="next"]')).click(() => {
			if(offset == (+width.replace(/\D/g, '') * (slides.length - 1))) {
				offset = 0;
			} else {
				offset += +width.replace(/\D/g, '')
			}

			slidesField.style.transfrom = `translateX(-${offset}px)`
		}); 

	};
};

$('.carousel').carousel();