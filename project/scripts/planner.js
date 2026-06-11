const form = document.getElementById('packing-form');
const itemNameInput = document.getElementById('itemName');
const categorySelect = document.getElementById('category');
const packingList = document.getElementById('packing-items');
const emptyMsg = document.getElementById('empty-msg');
const itemCountSpan = document.getElementById('item-count');

// Initialize list from localStorage or empty array
let items = JSON.parse(localStorage.getItem('kyotoPackingList')) || [];

// Render the list
function renderList() {
    packingList.innerHTML = '';
    
    // Conditional Branching
    if (items.length === 0) {
        emptyMsg.style.display = 'block';
        itemCountSpan.textContent = '(0)';
        return;
    } else {
        emptyMsg.style.display = 'none';
        itemCountSpan.textContent = `(${items.length})`;
    }

    items.forEach((item, index) => {
        const li = document.createElement('li');
        if (item.packed) {
            li.classList.add('packed');
        }

        // Use template literals
        li.innerHTML = `
            <span><strong>${item.name}</strong> <em>(${item.category})</em></span>
            <div>
                <button class="check-btn" onclick="togglePacked(${index})" aria-label="Toggle Packed">✔️</button>
                <button class="delete-btn" onclick="deleteItem(${index})" aria-label="Delete Item">❌</button>
            </div>
        `;
        
        packingList.appendChild(li);
    });
}

// Add new item
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = itemNameInput.value.trim();
    const category = categorySelect.value;
    
    // Conditional branching for validation
    if (name === "" || category === "") {
        alert("Please fill out all fields.");
        return;
    }

    const newItem = {
        name: name,
        category: category,
        packed: false
    };

    items.push(newItem);
    saveToLocalStorage();
    renderList();
    
    // Reset form
    form.reset();
});

// Toggle packed status
function togglePacked(index) {
    items[index].packed = !items[index].packed;
    saveToLocalStorage();
    renderList();
}

// Delete item
function deleteItem(index) {
    // Array method splice
    items.splice(index, 1);
    saveToLocalStorage();
    renderList();
}

// Save to localStorage
function saveToLocalStorage() {
    localStorage.setItem('kyotoPackingList', JSON.stringify(items));
}

// Initial render on page load
renderList();
