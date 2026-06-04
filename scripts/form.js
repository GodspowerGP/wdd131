// Product array provided by WDD 131 instructions
const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

document.addEventListener("DOMContentLoaded", () => {
    const productSelect = document.getElementById('product');

    // Dynamically populate the select options
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        // Capitalize the first letter of each word for better display
        option.textContent = product.name.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
        productSelect.appendChild(option);
    });
});
