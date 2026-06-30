const products = [
    { id: 1, name: "Mielle Mint Oil", category: "hair", desc: "Promotes thick, healthy growth.", img: "images/mieele.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 2, name: "Mielle Mint Straightening Shampoo", category: "hair", desc: "Sleek, frizz-free, smooth finish.", img: "images/mshampoo.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 3, name: "Mielle Pomegranate & Honey Smoothie", category: "hair", desc: "Perfectly defined, hydrated curls.", img: "images/pinkmieele.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 4, name: "Mielle Hair Mask", category: "hair", desc: "Deep repair for damaged hair.", img: "images/mieelemask.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 5, name: "Daily Styling Creme", category: "hair", desc: "Effortless hold and moisture.", img: "images/styling.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 6, name: "Anua Cleanser", category: "skincare", desc: "Gentle daily pore cleansing.", img: "images/cleanser.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 7, name: "Deep Cleansing Foam", category: "skincare", desc: "Deep extraction, fresh finish.", img: "images/cleansingfoam.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 8, name: "Anua Milky Toner", category: "skincare", desc: "Deep hydration, dewy glow.", img: "images/milkytoner.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 9, name: "Anua Niacinamide Serum", category: "skincare", desc: "Brightens dark spots instantly.", img: "images/aunaserum.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 10, name: "Anua Soothing Cleanser", category: "skincare", desc: "Calms redness and irritation.", img: "images/soothing.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 11, name: "Medicube Exosome Ampoule", category: "skincare", desc: "Advanced skin rejuvenation therapy.", img: "images/medicubeserum.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 12, name: "Medicube Kojic Acid Turmeric", category: "skincare", desc: "Potent skin brightening treatment.", img: "images/acid.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 13, name: "Medicube Collagen Mask", category: "skincare", desc: "Overnight firming and lifting.", img: "images/night.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 14, name: "Medicube Zero Pore Serum", category: "skincare", desc: "Visibly shrinks large pores.", img: "images/zero.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 15, name: "Medicube PDRN Peptide Serum", category: "skincare", desc: "Boosts skin elasticity daily.", img: "images/pdrn.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 16, name: "Bio Dance Facemask", category: "skincare", desc: "Deeply moisturizing collagen mask.", img: "images/biodance.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 17, name: "Centella Deep Foam", category: "skincare", desc: "Pore-refining soothing foam.", img: "images/centellafoam.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 18, name: "Centella Cleanser", category: "skincare", desc: "Gentle refreshing daily wash.", img: "images/cleansercen.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 19, name: "Madagascar Centella Ampoule", category: "skincare", desc: "Ultimate soothing barrier care.", img: "images/ampoule.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 20, name: "Pink Clay Stick Mask", category: "skincare", desc: "Quick purifying clay treatment.", img: "images/stick.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 21, name: "Centella Serum", category: "skincare", desc: "Lightweight calming skin serum.", img: "images/cserum.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 22, name: "LRP Repairing Balm", category: "skincare", desc: "Soothes and heals damaged skin.", img: "images/reapir.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 23, name: "LRP Vitamin C12 Serum", category: "skincare", desc: "Radiant anti-aging brightening power.", img: "images/c12.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 24, name: "LRP Gentle Cleanser", category: "skincare", desc: "Hydrating wash for sensitive skin.", img: "images/generalcleanser.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 25, name: "LRP Facial Sunscreen", category: "skincare", desc: "Invisible high-level sun defense.", img: "images/facial.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 26, name: "LRP Vitamin C10 Serum", category: "skincare", desc: "Dullness correcting radiance boost.", img: "images/c10.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 27, name: "LRP Foaming Gel", category: "skincare", desc: "Deep clean for oily skin.", img: "images/gelpoche.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 28, name: "Vichy B3 Serum", category: "skincare", desc: "Targets dark spots, anti-aging.", img: "images/b3serum.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 29, name: "Vichy Meno 5 Serum", category: "skincare", desc: "Targeted care for mature skin.", img: "images/meno5.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 30, name: "Vichy Vitamin C Brightening", category: "skincare", desc: "Intense daily brightening serum.", img: "images/vc16.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 31, name: "Vichy Retinol Serum", category: "skincare", desc: "Deep wrinkle smoothing treatment.", img: "images/wrinkle.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 32, name: "L'Oréal True Match Foundation", category: "makeup", desc: "Perfect skin-matching base.", img: "images/foundation.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 33, name: "L'Oréal Powder Foundation", category: "makeup", desc: "Smooth matte finish coverage.", img: "images/powder.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 34, name: "L'Oréal Matte Blush", category: "makeup", desc: "Natural flushed matte color.", img: "images/blush.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 35, name: "Sheglam Hydrating Primer", category: "makeup", desc: "Flawless makeup-locking base.", img: "images/primer.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 36, name: "SHEGLAM Matte Foundation", category: "makeup", desc: "Full coverage matte foundation.", img: "images/foundationglam.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 37, name: "CeraVe Mineral Sunscreen", category: "skincare", desc: "Gentle mineral sun protection.", img: "images/sunscreenc.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 38, name: "CeraVe Foaming Cleanser", category: "skincare", desc: "Deep cleaning without dryness.", img: "images/foaming c.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 39, name: "CeraVe Hydrating Cleanser", category: "skincare", desc: "Soft, moisture-rich facial wash.", img: "images/hydratec.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 40, name: "CeraVe Moisturizing Cream", category: "skincare", desc: "Long-lasting deep hydration.", img: "images/mc.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 41, name: "Cetaphil SPF 50+ Gel", category: "skincare", desc: "Lightweight high-SPF protection.", img: "images/cetagel.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 42, name: "Cetaphil Moisturizing Cream", category: "skincare", desc: "Essential dry skin relief.", img: "images/cjar.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 43, name: "Rare Beauty Blush", category: "makeup", desc: "Long-lasting high-pigment color.", img: "images/rblush.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 44, name: "Essence Mascara", category: "makeup", desc: "Bold volume, dramatic lashes.", img: "images/mascara.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 45, name: "Gluta-Hya Dewy Lotion", category: "skincare", desc: "Glowing, dewy skin radiance.", img: "images/lotion.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 46, name: "Gluta-Hya Glow Lotion", category: "skincare", desc: "Even-toned, flawless glow.", img: "images/l2.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 47, name: "Dior Glow Face Palette", category: "makeup", desc: "Professional highlight and shimmer.", img: "images/dior.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 48, name: "Dior Rosy Glow Blush", category: "makeup", desc: "Custom color-radiant finish.", img: "images/dblush.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 49, name: "NARS Foundation", category: "makeup", desc: "Radiant, light-reflecting skin.", img: "images/narsf.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 50, name: "Celimax Retinal Booster", category: "skincare", desc: "Firming, anti-aging tightening.", img: "images/celimax.jpg" },
    // ------------------------------------------------------------------------------------------------------------------------------------------------------
    { id: 51, name: "Neutrogena Sunblock", category: "skincare", desc: "Ultra-sheer, non-greasy protection.", img: "images/dry.jpg" }
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
