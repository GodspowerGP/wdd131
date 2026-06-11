const attractions = [
    {
        id: 1,
        name: "Fushimi Inari Taisha",
        category: "shrine",
        description: "Famous for its thousands of vermilion torii gates, which straddle a network of trails behind its main buildings.",
        imageUrl: "https://images.unsplash.com/photo-1545569341-9eb8b30979d9?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 2,
        name: "Kinkaku-ji (Golden Pavilion)",
        category: "temple",
        description: "A Zen temple in northern Kyoto whose top two floors are completely covered in gold leaf.",
        imageUrl: "images/kinkakuji.png"
    },
    {
        id: 3,
        name: "Arashiyama Bamboo Grove",
        category: "nature",
        description: "One of Kyoto's top sights and for good reason: standing amid these soaring stalks of bamboo is like being in another world.",
        imageUrl: "https://images.unsplash.com/photo-1542385151-efd9000785a0?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 4,
        name: "Kiyomizu-dera",
        category: "temple",
        description: "One of the most celebrated temples of Japan. It was founded in 780 on the site of the Otowa Waterfall.",
        imageUrl: "https://images.unsplash.com/photo-1590559899731-a382839e5549?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 5,
        name: "Philosopher's Path",
        category: "nature",
        description: "A pleasant stone path through the northern part of Kyoto's Higashiyama district. It follows a canal which is lined by hundreds of cherry trees.",
        imageUrl: "https://images.unsplash.com/photo-1509023464722-18d996393ca8?auto=format&fit=crop&w=600&q=80"
    },
    {
        id: 6,
        name: "Yasaka Shrine",
        category: "shrine",
        description: "One of the most famous shrines in Kyoto, located in the Gion district.",
        imageUrl: "https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?auto=format&fit=crop&w=600&q=80"
    }
];

const attractionsContainer = document.getElementById('attractions-container');
const filterBtns = document.querySelectorAll('.filter-btn');

// Render attractions using Template Literals
function displayAttractions(attractionsList) {
    attractionsContainer.innerHTML = '';
    
    attractionsList.forEach(attraction => {
        const cardHTML = `
            <div class="attraction-card">
                <img src="${attraction.imageUrl}" alt="${attraction.name}" loading="lazy" width="600" height="400">
                <div class="attraction-info">
                    <h3>${attraction.name}</h3>
                    <p><strong>Type:</strong> ${attraction.category.charAt(0).toUpperCase() + attraction.category.slice(1)}</p>
                    <p>${attraction.description}</p>
                </div>
            </div>
        `;
        // Insert the HTML using insertAdjacentHTML
        attractionsContainer.insertAdjacentHTML('beforeend', cardHTML);
    });
}

// Initial render
displayAttractions(attractions);

// Setup Filter Buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        // Remove active class from all
        filterBtns.forEach(b => b.classList.remove('active'));
        // Add active class to clicked
        e.target.classList.add('active');
        
        const filterCategory = e.target.getAttribute('data-filter');
        
        // Conditional branching & array method (filter)
        if (filterCategory === 'all') {
            displayAttractions(attractions);
        } else {
            const filtered = attractions.filter(attraction => attraction.category === filterCategory);
            displayAttractions(filtered);
        }
    });
});
