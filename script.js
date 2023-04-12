const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-active');
    burger.classList.toggle('toggle');
    links.forEach((link, index) => {
        if (link.style.animation) {
            link.style.animation = '';
        } else {
            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
        }
    });
});
const currentPage = location.pathname;
const menuItems = document.querySelectorAll('.nav-links a');

menuItems.forEach(item => {
    if (currentPage.includes(item.getAttribute('href'))) {
        item.parentElement.classList.add('active');
    } else {
        item.parentElement.classList.remove('active');
    }
});
const form = document.querySelector('#myForm');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const mobilenum = document.querySelector('#num');
const messageInput = document.querySelector('#message');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (nameInput.value === '' || emailInput.value === '' ||mobilenum.value===' ' || messageInput.value === '') {
        alert('Please fill in all fields');
    } else {
        // Code to submit the form goes here
        alert('Form submitted successfully');
        form.reset();
    }
});
