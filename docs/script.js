
/* Mobile nav */
const mobile_nav = document.getElementById('mobile_nav');
const mobile_menu = document.getElementById('mobile-menu');
const close_mobile_menu = document.getElementById('close-mobile-menu')

mobile_nav.addEventListener("click", (event) => {
    mobile_nav.classList.add('hidden');
    mobile_menu.classList.remove('hidden');
});

close_mobile_menu.addEventListener("click", (event) => {
    mobile_nav.classList.remove('hidden');
    mobile_menu.classList.add('hidden');
});


/* Carousel */
const carousel = document.getElementById('carousel');
let currentIndex = 0;

function showSlide(index) {
  const offset = -index * 40;
  carousel.style.transform = `translateX(${offset}%)`;
  updateDots(index);
}

function updateDots(index) {
  const dots = document.querySelectorAll('.dot');
  dots.forEach(dot => dot.classList.remove('bg-primary-blue'));
  dots.forEach(dot => dot.classList.add('bg-gray-400'));

  const activeDot = document.getElementById(`dot${index}`);
  activeDot.classList.remove('bg-gray-400');
  activeDot.classList.add('bg-primary-blue');
}

function goToSlide(index) {
  currentIndex = index;
  showSlide(index);
}

showSlide(currentIndex);


/* Cars type */
function typeOfCars(index) {
    const types = document.querySelectorAll('.carType');

    const inactiveClasses = 'carType roboto-bold underline text-primary-blue';
    const activeClasses = 'carType roboto-medium';
    const commonClasses = 'sm:text-base text-sm';

    types.forEach(type => {
        type.classList.remove(...inactiveClasses.split(' '));
        type.classList.add(...activeClasses.split(' '));
    });

    const activeType = document.getElementById(`carType${index}`);
    activeType.classList.remove(...activeClasses.split(' '));
    activeType.classList.add(...inactiveClasses.split(' '));
}