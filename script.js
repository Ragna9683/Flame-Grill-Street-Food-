/* ==========================================================================
   Na Łogniu Radzymin — Core Scripts & Menu Database
   ========================================================================== */

const menuData = [
    {
        id: 1,
        category: "burgers",
        badge: null,
        img: null,
        title: "Smash Burger Double",
        desc: "Opis i skład zostaną uzupełnione na podstawie menu lokalu.",
        ingredients: "Do uzupełnienia.",
        price: "— zł"
    },
    {
        id: 2,
        category: "kebab",
        badge: null,
        img: null,
        title: "Kebab z kurczakiem",
        desc: "Opis i skład zostaną uzupełnione na podstawie menu lokalu.",
        ingredients: "Do uzupełnienia.",
        price: "— zł"
    },
    {
        id: 3,
        category: "chicken",
        badge: null,
        img: null,
        title: "Kurczak z rożna",
        desc: "Opis i skład zostaną uzupełnione na podstawie menu lokalu.",
        ingredients: "Do uzupełnienia.",
        price: "— zł"
    },
    {
        id: 4,
        category: "fries",
        badge: null,
        img: null,
        title: "Frytki z serem i bekonem",
        desc: "Opis i skład zostaną uzupełnione na podstawie menu lokalu.",
        ingredients: "Do uzupełnienia.",
        price: "— zł"
    }
];

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. Mobile menu --- */
    const burgerBtn = document.getElementById('burger-menu-btn');
    const mainNav = document.getElementById('main-nav');

    burgerBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Close the menu after a link is chosen
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
        });
    });

    /* --- 2. Render the menu --- */
    const menuGrid = document.getElementById('menu-grid');

    function renderMenu(category = 'all') {
        menuGrid.innerHTML = '';

        const filtered = category === 'all' 
            ? menuData 
            : menuData.filter(item => item.category === category);

        filtered.forEach(item => {
            const badgeHtml = item.badge 
                ? `<span class="card__badge">${item.badge}</span>` 
                : '';

            const cardHTML = `
                <div class="card" data-category="${item.category}">
                    <div class="card__image">
                        ${item.img ? `<img src="${item.img}" alt="${item.title}" loading="lazy">` : '<div class="card__placeholder"><i class="fa-solid fa-utensils"></i></div>'}
                        ${badgeHtml}
                    </div>
                    <div class="card__content">
                        <h3 class="card__title">${item.title}</h3>
                        <p class="card__desc">${item.desc}</p>
                        <div class="card__footer">
                            <span class="card__price">${item.price}</span>
                            <button class="btn btn--small btn--outline open-modal" data-id="${item.id}">Szczegóły</button>
                        </div>
                    </div>
                </div>
            `;
            menuGrid.insertAdjacentHTML('beforeend', cardHTML);
        });

        initModals();
    }

    renderMenu('all');

    /* --- 3. Category filters --- */
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            renderMenu(filter);
        });
    });

    /* --- 4. Dish modal --- */
    function initModals() {
        const modal = document.getElementById('product-modal');
        const modalOverlay = document.getElementById('modal-overlay');
        const modalClose = document.getElementById('modal-close');

        const modalImg = document.getElementById('modal-img');
        const modalTitle = document.getElementById('modal-title');
        const modalPrice = document.getElementById('modal-price');
        const modalDesc = document.getElementById('modal-desc');
        const modalIngredients = document.getElementById('modal-ingredients');

        document.querySelectorAll('.open-modal').forEach(btn => {
            btn.addEventListener('click', () => {
                const id = btn.dataset.id;
                const product = menuData.find(p => p.id == id);
                if (!product) return;

                if (product.img) {
                    modalImg.src = product.img;
                    modalImg.style.display = '';
                } else {
                    modalImg.removeAttribute('src');
                    modalImg.style.display = 'none';
                }
                modal.classList.toggle('modal--no-image', !product.img);
                modalTitle.textContent = product.title;
                modalPrice.textContent = product.price;
                modalDesc.textContent = product.desc;
                modalIngredients.textContent = product.ingredients;

                modal.classList.add('active');
            });
        });

        function closeModal() {
            modal.classList.remove('active');
        }

        if (modalClose) modalClose.onclick = closeModal;
        if (modalOverlay) modalOverlay.onclick = closeModal;
    }

});