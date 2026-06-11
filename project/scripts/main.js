// Dynamic Footer Dates
const currentyear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");

if (currentyear) {
    currentyear.textContent = new Date().getFullYear();
}

if (lastModified) {
    lastModified.innerHTML = "Last Modification: " + document.lastModified;
}

// Hamburger Menu Toggle
const mainnav = document.querySelector('nav ul');
const hambutton = document.querySelector('#menu');

if (hambutton && mainnav) {
    hambutton.addEventListener('click', () => {
        mainnav.classList.toggle('show');
        hambutton.classList.toggle('show');
    });
}
