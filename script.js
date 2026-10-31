/* ==========================================================================
   Na Łogniu Radzymin — Core Scripts & Menu Database
   ========================================================================== */

const menuData = [
    {
        id: 1,
        category: "burgers",
        badge: "Bestseller",
        img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=800&q=80",
        title: "Burger Na Łogniu XXL",
        desc: "Potężna porcja soczystej wołowiny, podwójny cheddar, chrupiący bekon i autorski ostry sos.",
        ingredients: "Wołowina 200g, ser cheddar, bekon, czerwona cebula, pomidor, sałata rzymska, sos Na Łogniu.",
        price: "42 PLN"
    },
    {
        id: 2,
        category: "burgers",
        badge: "Hit",
        img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=800&q=80",
        title: "Klasyczny Burger z Grilla",
        desc: "Tradycyjny smak w najlepszym wydaniu. Wołowina opalana na żywym ogniu z maślaną bułką brioche.",
        ingredients: "Wołowina 180g, ogórek konserwowy, pomidor, sałata, sos majonezowo-musztardowy.",
        price: "36 PLN"
    },
    {
        id: 3,
        category: "burgers",
        badge: "Ostrzejszy",
        img: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80",
        title: "Jalapeño Smokey Burger",
        desc: "Dla miłośników wyrazistych wrażeń: papryczki jalapeño, wędzony ser i sos BBQ.",
        ingredients: "Wołowina 180g, ser wędzony, papryczki jalapeño, bekon, prażona cebulka, sos BBQ.",
        price: "39 PLN"
    },
    {
        id: 4,
        category: "kebab",
        badge: "Polecamy",
        img: "https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?auto=format&fit=crop&w=800&q=80",
        title: "Kebab w Bułce z Grilla",
        desc: "Chrupiąca z zewnątrz i miękka w środku bułka wypiekana na miejscu, mnóstwo mięsa i świeże warzywa.",
        ingredients: "Mięso drobiowe/wołowe (do wyboru), mix sałat, pomidor, ogórek, sos czosnkowy lub ostry.",
        price: "32 PLN"
    },
    {
        id: 5,
        category: "kebab",
        badge: null,
        img: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?auto=format&fit=crop&w=800&q=80",
        title: "Rollo Kebab Duže",
        desc: "Cienkie, chrupiące ciasto lawasz zawinięte z soczystym mięsem i aromatycznymi sosami.",
        ingredients: "Tortilla lawasz, mięso z grilla, kapusta pekińska, pomidor, ogórek kiszony, sos autorski.",
        price: "35 PLN"
    },
    {
        id: 6,
        category: "kebab",
        badge: "Zestaw",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        title: "Talerz Kebab z Frytkami",
        desc: "Bogaty zestaw: porcja mięsa z grilla, złociste frytki, surówka i zestaw sosów.",
        ingredients: "Mięso, duża porcja frytek stekowych, świeża surówka colesław, sosy w osobnych naczyniach.",
        price: "44 PLN"
    },
    {
        id: 7,
        category: "grill",
        badge: "Specjał Szefa",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        title: "Zestaw z Karkówką z Grilla",
        desc: "Soczysta karkówka marynowana w ziołach i czosnku, pieczona na prawdziwym węglu drzewnym.",
        ingredients: "Karkówka z grilla 250g, pieczone ziemniaki lub frytki, mix sałat, sos czosnkowy.",
        price: "45 PLN"
    },
    {
        id: 8,
        category: "grill",
        badge: null,
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
        title: "Szaszłyk Drobiowy z Warzywami",
        desc: "Delikatne kawałki piersi z kurczaka przekładane papryką, cebulą i cukinią z grilla.",
        ingredients: "Szponder drobiowy, grillowana papryka, czerwona cebula, cukinia, sos tzatziki.",
        price: "38 PLN"
    },
    {
        id: 9,
        category: "chicken",
        badge: "Chrupiące",
        img: "https://images.unsplash.com/photo-1562967914-608f82629710?auto=format&fit=crop&w=800&q=80",
        title: "Stripsy z Kurczaka (6 szt.)",
        desc: "Złociste, chrupiące paski z fileta z kurczaka w aromatycznej panierce kukurydzianej.",
        ingredients: "Filet z kurczaka, panierka cornflakes, sos słodko-kwaśny lub majonezowy.",
        price: "29 PLN"
    },
    {
        id: 10,
        category: "chicken",
        badge: null,
        img: "https://images.unsplash.com/photo-1527477396000-e27163b481c2?auto=format&fit=crop&w=800&q=80",
        title: "Skrzydełka BBQ (8 szt.)",
        desc: "Pikantne skrzydełka pieczone i glazurowane w dymnym sosie Barbecue.",
        ingredients: "Skrzydełka z kurczaka, sos BBQ, posypka z sezamu i szczypiorku.",
        price: "31 PLN"
    },
    {
        id: 11,
        category: "fries",
        badge: null,
        img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=800&q=80",
        title: "Frytki Stekowe z Posypką",
        desc: "Grube, chrupiące frytki ziemniaczane z autorską mieszanką przypraw.",
        ingredients: "Ziemniaki, zioła prowansalskie, sól morska.",
        price: "14 PLN"
    },
    {
        id: 12,
        category: "fries",
        badge: "Polecamy",
        img: "https://images.unsplash.com/photo-1639024471283-03518883512d?auto=format&fit=crop&w=800&q=80",
        title: "Krążki Cebulowe (8 szt.)",
        desc: "Złociste krążki cebulowe w cieście piwnym z sosem czosnkowym.",
        ingredients: "Cebula, ciasto panierowane, sos czosnkowy.",
        price: "16 PLN"
    }
];

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. МОБИЛЬНОЕ МЕНЮ (BURGER) --- */
    const burgerBtn = document.getElementById('burger-menu-btn');
    const mainNav = document.getElementById('main-nav');

    burgerBtn.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Закрытие меню при клике на ссылку
    mainNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('active');
        });
    });

    /* --- 2. ДИНАМИЧЕСКИЙ РЕНДЕР МЕНЮ --- */
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
                        <img src="${item.img}" alt="${item.title}" loading="lazy">
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

    /* --- 3. ФИЛЬТРАЦИЯ КАТЕГОРИЙ --- */
    const filterBtns = document.querySelectorAll('.filter-btn');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const filter = btn.dataset.filter;
            renderMenu(filter);
        });
    });

    /* --- 4. МОДАЛЬНЫЕ ОКНА БЛЮД --- */
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

                modalImg.src = product.img;
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