const burger = document.querySelector('.menu__btn');
const menuMobile = document.querySelector('.menu-mobile');
burger.addEventListener('click', () => {
	menuMobile.classList.toggle('menu--open')
})


let map;

async function initMap() {
  //@ts-ignore
  const { Map } = await google.maps.importLibrary("maps");

  map = new Map(document.getElementById("map"), {
    center: { lat: 37.23161509006605, lng:-8.628414343474175 },
    zoom: 13,
	 
  });
}

initMap();
const swiper = new Swiper('.swiper', {
	loop: true,
	
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-left',
	  prevEl: '.swiper-button-right',
	},
	breakpoints:{
		0:{
			slidesPerView: 1,
		},
		768:{
			slidesPerView: 2,
			spaceBetween: 30,
		}
	}
 
 });

