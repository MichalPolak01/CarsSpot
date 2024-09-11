
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

// Initialization for ES Users
import {
    Carousel,
    initTWE,
  } from "tw-elements";
  
  initTWE({ Carousel });