const leftArrow = document.querySelector('.arrow_left')
const rightArrow = document.querySelector('.arrow_right')
const bannerImg = document.querySelector('.banner-img')
const paragraphBanner = document.querySelector('#banner p')
const dotsContainer = document.querySelector('.dots')

let index = 0;

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

for (let i=0; i < slides.length; i++ ) {
	const span = document.createElement('span')
	span.classList.add('dot')

	if (i === index) {
		span.classList.add('dot_selected')
	}

	span.addEventListener('click', function() {
		index = i
		bannerImg.src = './assets/images/slideshow/' + slides[index].image;
	paragraphBanner.innerHTML = slides[index].tagLine;
	changeDotSelectedCss()
	})

	dotsContainer.appendChild(span)
}

function changeDotSelectedCss() {
	const dots = document.querySelectorAll('.dot')
	dots.forEach((dot, i) => {
		dot.classList.remove('dot_selected')
		if (i === index) {
			dot.classList.add('dot_selected')
		}
	})

}


rightArrow.addEventListener('click', function() {
	index++
	if (index > slides.length - 1) {
		index = 0;
	}
	bannerImg.src = './assets/images/slideshow/' + slides[index].image;
	paragraphBanner.innerHTML = slides[index].tagLine;
	changeDotSelectedCss()
})

leftArrow.addEventListener('click', function() {
	index--;
	if (index < 0) {
		index = slides.length -1;
}
	bannerImg.src = './assets/images/slideshow/' + slides[index].image;
	paragraphBanner.innerHTML = slides[index].tagLine;
	changeDotSelectedCss()
})