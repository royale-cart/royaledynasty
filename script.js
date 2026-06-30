const products = [
    { id: 1, name: "Mieele Mint Oil ", category: "hair", image: "images/mieele.jpg" },
    { id: 2, name: "Mieele Mint Straightening Shampoo", category: "hair", image: "images/mshampoo.jpg" },
    { id: 3, name: "Mielle Pomegranate & Honey Curl Smoothie", category: "hair", image: "images/pinkmieele.jpg" },
    { id: 4, name: "Mieele Hair Mask", category: "hair", image: "images/mieelemask.jpg" },
    { id: 5, name: "Daily Styling creme", category: "hair", image: "images/styling.jpg" },
    { id: 6, name: "Auna Cleanser", category: "skincare", image: "images/cleanser.jpg" },
    { id: 7, name: "Deep Cleansing Foam", category: "skincare", image: "images/cleansingfoam.jpg" },
    { id: 8, name: "Auna Milky Toner", category: "skincare", image: "images/milkytoner.jpg" },
    { id: 9, name: "Anua Niacinamide 10 + TXA 4 Serum", category: "skincare", image: "images/aunaserum.jpg" },
    { id: 10, name: "Auna Soothing Cleanser", category: "skincare", image: "images/soothing.jpg" },
    { id: 11, name: "Medicube Exosome Ampoule Serum", category: "skincare", image: "images/medicubeserum.jpg" },
    { id: 12, name: "Medicube Kojic Acid Turmeric", category: "skincare", image: "images/acid.jpg" },
    { id: 13, name: "Medicube Colagen Night Wrapping Mask", category: "skincare", image: "images/night.jpg" },
    { id: 14, name: "Medicube Zero Pore Serum", category: "skincare", image: "images/zero.jpg" },
    { id: 15, name: "Medicube PDRN Pink Peptide Serum", category: "skincare", image: "images/pdrn.jpg" },
    { id: 16, name: "Bio Dance Facemask", category: "skincare", image: "images/biodance.jpg" },
    { id: 17, name: "Centella Poremizing Deep Cleansing Foam", category: "skincare", image: "images/centellafoam.jpg" },
    { id: 18, name: "Centella Cleanser", category: "skincare", image: "images/cleansercen.jpg" }, 
    { id: 19, name: "Madagascar Centella Ampoule", skincare: "drones", image: "images/ampoule.jpg" },
    { id: 20, name: "Pink Clay Stick Mask", category: "skincare", image: "images/stick.jpg" },
    { id: 21, name: "Centella Serum", category: "skincare", image: "images/cserum.jpg" },
    { id: 22, name: "La Roche-Posay Repairing Balm", category: "skincare", image: "images/reapir.jpg" },
    { id: 23, name: "La Roche-Posay Pure Vitamin C12 Serum", category: "skincare", image: "images/c12.jpg" },
    { id: 24, name: "La Roche-Posay Toleriane Hydrating Gentle Cleanser", category: "skincare", image: "images/generalcleanser.jpg" },
    { id: 25, name: "La Roche-Posay Anthelios Facial Sunscreen", category: "skincare", image: "images/facial.jpg" },
    { id: 26, name: "La Roche-Posay Pure Vitamin C10", category: "skincare", image: "images/c10.jpg" },
    { id: 27, name: "La Roche-Posay Foaming Gel Cleanser", category: "skincare", image: "images/gelpoche.jpg" },
    { id: 28, name: "Vichy Liftactiv Specialist B3 Serum", category: "skincare", image: "images/b3serum.jpg" },
    { id: 29, name: "Vichy Neovadiol Meno 5 Bi-Serum", category: "skincare", image: "images/meno5.jpg" },
    { id: 30, name: "Vichy LiftActiv Pure Vitamin C Brightening", category: "skincare", image: "images/vc16.jpg" },
    { id: 31, name: "Vichy Liftactiv Retinol Specialist Deep Wrinkles Serum", category: "skincare", image: "images/wrinkle.jpg" },
    { id: 32, name: "L'Oréal Paris True Match Super-Blendable Foundation", category: "makeup", image: "images/foundation.jpg" },
    { id: 33, name: "L'Oréal Paris Powder Foundation", category: "makeup", image: "images/powder.jpg" },
    { id: 34, name: "L'Oréal Paris Mattee Blush", category: "makeup", image: "images/blush.jpg" },
    { id: 35, name: "Sheglam Good Grip Hydrating Primer", category: "makeup", image: "images/primer.jpg" },
    { id: 36, name: "SHEGLAM Matte Foundation", category: "makeup", image: "images/foundationglam.jpg" },
    { id: 37, name: "CeraVe Hydrating Mineral Sunscreen", category: "skincare", image: "images/sunscreenc.jpg" },
    { id: 38, name: "CeraVe Foaming Facial Cleanser", category: "skincare", image: "images/foaming c.jpg" },
    { id: 39, name: "CeraVe Hydrating Cleanser", category: "skincare", image: "images/hydratec.jpg" },
    { id: 39, name: "CeraVe Moisturizing Cream", category: "skincare", image: "images/mc.jpg" },
    { id: 40, name: "Cetaphil Sun SPF 50+ Light Gel", category: "skincare", image: "images/cetagel.jpg" },
    { id: 41, name: "Cetaphil Moisturizing Cream jar", category: "skincare", image: "images/cjar.jpg" },
    { id: 42, name: "Rare Beauty Blush", category: "makeup", image: "images/rblush.jpg" },
    { id: 43, name: "Essence Lengthening & Volume Mascara", category: "makeup", image: "images/mascara.jpg" },
    { id: 44, name: "Gluta-Hya Dewy Radiance Serum Burst Lotion", category: "skincare", image: "images/lotion.jpg" },
    { id: 45, name: "Gluta-Hya Flawless Glow Serum-in-Lotion", category: "skincare", image: "images/l2.jpg" },
    { id: 46, name: "Dior Backstage Glow Face Palette", category: "makeup", image: "images/dior.jpg" },
    { id: 47, name: "Dior Backstage Rosy Glow powder blush", category: "makeup", image: "images/dblush.jpg" },
    { id: 48, name: "NARS Light Reflecting Foundation", category: "makeup", image: "images/narsf.jpg" },
    { id: 49, name: "Celimax Retinal Shot Tightening Booster", category: "skincare", image: "images/celimax.jpg" },
    { id: 50, name: "Neutrogena Ultra Sheer Dry-Touch Sunblock", category: "skincare", image: "images/dry.jpg" },
];

// -------------------------------------------------------------------------------------------------------------------------------------
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
