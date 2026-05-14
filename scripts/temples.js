// Handle dynamic dates
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

currentyear.textContent = new Date().getFullYear();
lastModified.innerHTML = "Last Modification: " + document.lastModified;

// Handle hamburger menu toggle
const mainnav = document.querySelector('#navigation');
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});
