'use strict';

//
const section1 = document.querySelector('#about');
const sections = document.querySelectorAll('.scroll-link');

// Getting the specific chord
const aboutSectionChord = section1.getBoundingClientRect();

// Navbar apearing after section 1
const nav = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
  if (window.scrollY > aboutSectionChord.top) nav.classList.add('navSticky');
  else nav.classList.remove('navSticky');
});

// Scrolling to specific section
sections.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    console.log(targetId);
    const targetElement = document.getElementById(targetId);
    console.log(targetElement);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});
