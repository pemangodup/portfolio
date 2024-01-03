'use strict';

//
const section1 = document.querySelector('#about');
const sections = document.querySelectorAll('.scroll-link');

// Getting the specific chord
const aboutSectionChord = section1.getBoundingClientRect();

// Navbar apearing after section 1
const nav = document.querySelector('#navbar');
window.addEventListener('scroll', function () {
  if (window.scrollY > aboutSectionChord.top) nav.classList.add('navSticky');
  else nav.classList.remove('navSticky');
});

// Scrolling to specific section
sections.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const targetId = link.getAttribute('href');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
      });
    }
  });
});

// Send message to email
function sendEmail() {
  (function () {
    emailjs.init('3W3ORkRRT9oHJ1I6o');
  })();
  let params = {
    from_name: document.querySelector('#name').value,
    email_id: document.querySelector('#email').value,
    message: document.querySelector('#message').value,
    subject: document.querySelector('#subject').value,
  };
  let serviceId = 'service_xgquioq';
  let templateId = 'template_lt1e3r8';
  emailjs
    .send(serviceId, templateId, params)
    .then((res) => {
      alert('Email sent successfully');
      let form = document.getElementById('contactForm');
      form.reset();
    })
    .catch((error) => {
      alert('Email sending error: ', error);
    });
}
