'use strict';

const section1 = document.querySelector('.about');

const initialCord = section1.getBoundingClientRect();
const nav = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
  if (window.scrollY > initialCord.top) nav.classList.add('navSticky');
  else nav.classList.remove('navSticky');
});
