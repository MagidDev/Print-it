const leftArrow = document.querySelector('.arrow_left')
const rightArrow = document.querySelector('.arrow_right')
const bannerImg = document.querySelector('.banner-img')
const paragraphBanner = document.querySelector('#banner p')

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


rightArrow.addEventListener('click', function() {
	index++
	if (index > slides.length - 1) {
		index = 0;
	}
	bannerImg.src = './assets/images/slideshow/' + slides[index].image;
	paragraphBanner.innerHTML = slides[index].tagLine;
})

// conditions en JS (if, else, switch)
// boucle en JS (for, while, forEach, map...)
// tableau en JS (array)
// objet en JS (object)
// créer des élements en JS (createElement)
// ajouter des élements en JS (appendChild)
