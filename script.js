// Boutique Style Product Data
const products = [
    { 
        id: 1, 
        name: "Mielle Rosemary Mint Oil", 
        category: "Hair Care", 
        desc: "Transform your scalp health with this organic elixir designed for stronger, fuller, and lustrous hair.", 
        img: "images/mieele.jpg" 
    },
    // --------------------------------------------------------
    { 
        id: 2, 
        name: "Mielle Mint Straightening Shampoo", 
        category: "Hair Care", 
        desc: "Achieve the ultimate sleek look; a professional frizz-defying formula that leaves hair silky and weightless.", 
        img: "images/mshampoo.jpg" 
    },
    // --------------------------------------------------------
    { 
        id: 3, 
        name: "Mielle Pomegranate & Honey Smoothie", 
        category: "Hair Care", 
        desc: "Your curls deserve perfection. A deeply hydrating cream that defines, shapes, and radiates natural beauty.", 
        img: "images/pinkmieele.jpg" 
    },
    // --------------------------------------------------------
    { 
        id: 4, 
        name: "Mielle Intensive Hair Mask", 
        category: "Hair Care", 
        desc: "Indulge in a luxurious rescue treatment that repairs deep damage, unveiling soft and revitalized hair.", 
        img: "images/mieelemask.jpg" 
    }
    // --------------------------------------------------------
];
const whatsappNumber = "923295618970"; 

const productGrid = document.getElementById('product-grid');
const searchBar = document.getElementById('search-bar');
const categoryFilters = document.getElementById('category-filters');
const noResults = document.getElementById('no-results');

const modal = document.getElementById('product-modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalCategory = document.getElementById('modal-category');
const modalDesc = document.getElementById('modal-desc');
const whatsappBtn = document.getElementById('whatsapp-btn');
const closeBtn = document.getElementById('close-modal-icon');
const modalBackdrop = document.querySelector('.modal-backdrop');

let currentCategory = "All";
let searchQuery = "";

// Sync loader with brand vibe
window.addEventListener('load', () => {
    const loader = document.getElementById('loader');
    setTimeout(() => {
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 600);
    }, 1500); 
});

function renderCategories() {
    const categories = ["All", ...new Set(products.map(p => p.category))];
    
    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.classList.add('filter-btn');
        if (cat === "All") btn.classList.add('active');
        btn.textContent = cat;
        
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = cat;
            filterAndRender();
        });
        
        categoryFilters.appendChild(btn);
    });
}

function filterAndRender() {
    productGrid.innerHTML = "";
    
    const filteredProducts = products.filter(product => {
        const matchesCategory = currentCategory === "All" || product.category === currentCategory;
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filteredProducts.length === 0) {
        noResults.classList.remove('hidden');
    } else {
        noResults.classList.add('hidden');
        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.classList.add('product-card');
            card.innerHTML = `
                <div class="card-image-wrapper">
                    <img src="${product.img}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <span class="product-category">${product.category}</span>
                    <h3>${product.name}</h3>
                </div>
            `;
            card.addEventListener('click', () => openModal(product));
            productGrid.appendChild(card);
        });
    }
}

searchBar.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    filterAndRender();
});

function openModal(product) {
    modalImg.src = product.img;
    modalTitle.textContent = product.name;
    modalCategory.textContent = product.category;
    modalDesc.textContent = product.desc;
    
    whatsappBtn.onclick = () => {
        const message = `Hello, I want more details on ${product.name} from Royale Dynasty.`;
        const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    };

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; 
}

function closeModal() { 
    modal.classList.add('hidden'); 
    document.body.style.overflow = ''; 
}

closeBtn.addEventListener('click', closeModal);
modalBackdrop.addEventListener('click', closeModal);

renderCategories();
filterAndRender();
