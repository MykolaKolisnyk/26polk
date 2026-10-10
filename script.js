/* ==========================================
   DEVELOPER SIGNATURE: Mykola Kolisnyk
   ========================================== */

let heroImages = [];
let heroSlideIndex = 0;
let heroSliderInterval = null;

const vacanciesData = [
    { title: "Стрілець", salary: "від 20 100 до 121 100 грн" },
    { title: "Кулеметник", salary: "від 20 100 до 121 100 грн" },
    { title: "Санітарний інструктор", salary: "від 20 100 до 121 100 грн" },
    { title: "Снайпер", salary: "від 20 100 до 121 100 грн" },
    { title: "Оператор БПЛА", salary: "від 20 100 до 121 100 грн" },
    { title: "Радіотелефоніст", salary: "від 20 100 до 121 100 грн" },
    { title: "Водій", salary: "від 20 100 до 121 100 грн" },
    { title: "Кінолог (дресирувальник)", salary: "від 20 100 до 121 100 грн" },
    { title: "Гранатометник", salary: "від 20 100 до 121 100 грн" },
    { title: "Кухар", salary: "від 20 100 до 121 100 грн" }
];

const newsData = [
    {
        title: "Тренування службових собак",
        tag: "Кінологи · Службові собаки",
        mainImg: "images/836931395_1984962948836607_9011944055143212977_n.jpg",
        extraImgs: [
            "images/836931395_1984962948836607_9011944055143212977_n.jpg",
            "images/838271816_1647004833752978_6125992353517394042_n.jpg",
            "images/839860468_1607021144399523_4450184824900895759_n.jpg",
            "images/843372831_2166089843975094_1448904485152543139_n.jpg",
            "images/840621565_1084930981178726_7702493286099789578_n.jpg",
            "images/839099203_2105983510278917_8940457657174587480_n.jpg",
            "images/840923296_1617942929820031_1350898617493349180_n.jpg"
        ],
        snippet: "Подолати перешкоди, затримати правопорушника і знайти людину за запахом, – кожна вправа під час тренування має практичне значення...",
        full: "Подолати перешкоди, затримати правопорушника і знайти людину за запахом, – кожна вправа під час тренування службових собак має практичне значення. Кінологи 26-го Закарпатського полку НГУ разом зі своїми чотирилапими побратимами щоденно відпрацьовують спеціальні завдання задля ефективного виконання службових обов'язків та безпеки громадян.",
        fbLink: "https://www.facebook.com/ngu3115"
    },
    {
        title: "Єпархіальна проща капеланів і військових",
        tag: "Духовна підтримка · Середнє",
        mainImg: "images/839766461_1456582696341539_908863847856337661_n.jpg",
        extraImgs: [
            "images/839766461_1456582696341539_908863847856337661_n.jpg",
            "images/825286814_1093044023590330_1427204772871957327_n.jpg",
            "images/836459705_1768232361040576_8394415916639479470_n.jpg",
            "images/835641584_1550066143475456_649108382364570726_n.jpg",
            "images/838783174_1858901995477376_2341760530219135974_n.jpg",
            "images/833574322_1626303512268653_6553339336642737791_n.jpg",
            "images/836982557_2275927786531985_6511558931053170672_n.jpg",
            "images/837632582_1499623368666686_4395824239492408325_n.jpg",
            "images/838628403_1761210188486409_6725901903619087135_n.jpg",
            "images/839232459_941232851959798_3176299763654271093_n.jpg"
        ],
        snippet: "У селищі Середнє відбулася єпархіальна проща капеланів і військовослужбовців. До молитовного заходу долучилися нацгвардійці...",
        full: "У селищі Середнє відбулася єпархіальна проща капеланів і військовослужбовців. До молитовного заходу долучилися і нацгвардійці 26 Закарпатського полку НГУ.<br><br>Архиєрейську Божественну Літургію очолив голова Департаменту військового капеланства Патріаршої курії Української Греко-Католицької Церкви єпископ Богдан.",
        fbLink: "https://www.facebook.com/ngu3115"
    },
    {
        title: "Тренування з адаптивного кікбоксингу",
        tag: "Спорт · Реабілітація",
        mainImg: "images/838409408_1129487869458838_2634619028152499259_n.jpg",
        extraImgs: [
            "images/838409408_1129487869458838_2634619028152499259_n.jpg",
            "images/836637268_1073423302177217_484978732304287606_n.jpg",
            "images/836213046_990638217393719_6761406622124520957_n.jpg",
            "images/833914046_1809654163523278_7215184585210833193_n.jpg",
            "images/833906957_1139527505317382_3507548865350665306_n.jpg",
            "images/833653715_1420069062982849_5830804286800237741_n.jpg",
            "images/832512731_2309325356495371_8218882459172997546_n.jpg"
        ],
        snippet: "Гвардійці 26 Закарпатського полку долучилися до відкритого тренування з адаптивного кікбоксингу...",
        full: "Гвардійці 26 Закарпатського полку долучилися до відкритого тренування з адаптивного кікбоксингу для ветеранів і військовослужбовців.",
        fbLink: "https://www.facebook.com/ngu3115"
    },

    {
        title: "NEW TITLE",
        tag: "NEW TAG",
        mainImg: "images/image222.jpg",
        extraImgs: [
            "images/imag22222.jpg",
            "images/8387822233174_1858901995477376_2341760530219135974_n.jpg"
        ],
        snippet: "ОПИС",
        full: "ОПИС",
        fbLink: "https://www.facebook.com/ngu3115"
    },
    {
        title: "NEW TITLE",
        tag: "NEW TAG",
        mainImg: "images/8406234341565_1084930981178726_7702493286099789578_n.jpg",
        extraImgs: [
            "images/8403443621565_1084930981178726_7702493286099789578_n.jpg",
            "images/8390993443203_2105983510278917_8940457657174587480_n.jpg"
        ],
        snippet: "ОПИС",
        full: "ОПИС",
        fbLink: "https://www.facebook.com/ngu3115"
    },
    {
        title: "NEW TITLE",
        tag: "NEW TAG",
        mainImg: "images/836982557_22759245457786531985_6511558931053170672_n.jpg",
        extraImgs: [
            "images/836982557_45452275927786531985_6511558931053170672_n.jpg",
            "images/8376325845542_1499623368666686_4395824239492408325_n.jpg"
        ],
        snippet: "ОПИС",
        full: "ОПИС",
        fbLink: "https://www.facebook.com/ngu3115"
    },

    {
        title: "NEW TITLE",
        tag: "NEW TAG",
        mainImg: "images/84092324534596_1617942929820031_1350898617493349180_n.jpg",
        extraImgs: [
            "images/840923294353456_1617942929820031_1350898617493349180_n.jpg",
            "images/83564145435584_1550066143475456_649108382364570726_n.jpg"
        ],
        snippet: "ОПИС",
        full: "ОПИС",
        fbLink: "https://www.facebook.com/ngu3115"
    },
    {
        title: "NEW TITLE",
        tag: "NEW TAG",
        mainImg: "images/833914046_18096541654643523278_7215184585210833193_n.jpg",
        extraImgs: [
            "images/833914046_180564569654163523278_7215184585210833193_n.jpg",
            "images/833653715_5464561420069062982849_5830804286800237741_n.jpg"
        ],
        snippet: "ОПИС",
        full: "ОПИС",
        fbLink: "https://www.facebook.com/ngu3115"
    },
    {
        title: "NEW TITLE",
        tag: "NEW TAG",
        mainImg: "images/833574322_1626303512268635634553_6553339336642737791_n.jpg",
        extraImgs: [
            "images/833574322_1626303512345345268653_6553339336642737791_n.jpg",
            "images/825286814_109304402454353590330_1427204772871957327_n.jpg"
        ],
        snippet: "ОПИС",
        full: "ОПИС",
        fbLink: "https://www.facebook.com/ngu3115"
    }
];

const itemsPerPage = 3;
let currentPage = 1;

function setupScrollingEffect(boxId) {
    const box = document.getElementById(boxId);
    if (!box) return;
    let scrollTimeout = null;
    
    box.addEventListener('scroll', () => {
        box.classList.add('is-scrolling');
        if (scrollTimeout !== null) {
            clearTimeout(scrollTimeout);
        }
        scrollTimeout = setTimeout(() => {
            box.classList.remove('is-scrolling');
        }, 500);
    }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
    setupScrollingEffect('news-modal-box');
    setupScrollingEffect('vac-modal-box');
});

function generateRandomHeroImages() {
    let allImgs = [];
    newsData.forEach(item => {
        if (item.mainImg) allImgs.push(item.mainImg);
        if (item.extraImgs && item.extraImgs.length > 0) {
            allImgs.push(...item.extraImgs);
        }
    });
    allImgs = [...new Set(allImgs)];

    for (let i = allImgs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allImgs[i], allImgs[j]] = [allImgs[j], allImgs[i]];
    }
    heroImages = allImgs;
}

function initHeroSlider() {
    generateRandomHeroImages();
    const dotsContainer = document.getElementById('hero-slider-dots');
    const imgEl = document.getElementById('hero-slider-img');
    if (!dotsContainer || heroImages.length === 0) return;

    if (imgEl) imgEl.src = heroImages[0];
    dotsContainer.innerHTML = '';
    heroImages.forEach((_, idx) => {
        dotsContainer.innerHTML += `<div class="slider-dot ${idx === 0 ? 'active' : ''}" onclick="goToHeroSlide(${idx})"></div>`;
    });
    startHeroSliderAuto();
}

function showHeroSlide(index) {
    const imgEl = document.getElementById('hero-slider-img');
    const dots = document.querySelectorAll('.slider-dot');
    if (!imgEl || heroImages.length === 0) return;

    heroSlideIndex = (index + heroImages.length) % heroImages.length;
    imgEl.classList.add('fade-out');
    setTimeout(() => {
        imgEl.src = heroImages[heroSlideIndex];
        imgEl.classList.remove('fade-out');
    }, 200);

    dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === heroSlideIndex);
    });
}

function nextHeroSlide() { showHeroSlide(heroSlideIndex + 1); resetHeroSliderAuto(); }
function prevHeroSlide() { showHeroSlide(heroSlideIndex - 1); resetHeroSliderAuto(); }
function goToHeroSlide(idx) { showHeroSlide(idx); resetHeroSliderAuto(); }
function startHeroSliderAuto() { 
    clearInterval(heroSliderInterval);
    heroSliderInterval = setInterval(() => { showHeroSlide(heroSlideIndex + 1); }, 4000); 
}
function resetHeroSliderAuto() { clearInterval(heroSliderInterval); startHeroSliderAuto(); }

function renderVacancies() {
    const container = document.getElementById('vacancies-container');
    if (!container) return;
    container.innerHTML = '';
    vacanciesData.forEach((vac, index) => {
        container.innerHTML += `
            <div class="vacancy-card" onclick="openVacancyModal(${index})">
                <h3>${vac.title}</h3>
                <p class="salary">${vac.salary}</p>
            </div>
        `;
    });
}

function renderNews(page = 1) {
    currentPage = page;
    const container = document.getElementById('news-container');
    if (!container) return;

    container.innerHTML = '';
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentNews = newsData.slice(startIndex, endIndex);

    currentNews.forEach((item, idx) => {
        const globalIndex = startIndex + idx;
        container.innerHTML += `
            <div class="news-card" onclick="openModal(${globalIndex})">
                <div class="news-img-box">
                    <img src="${item.mainImg}" alt="${item.title}" class="news-img">
                </div>
                <div class="news-body">
                    <div>
                        <span class="news-tag">${item.tag}</span>
                        <h3 class="news-title">${item.title}</h3>
                        <p class="news-snippet">${item.snippet}</p>
                    </div>
                    <div class="news-footer">
                        <span class="btn-link">Розгорнути новину</span>
                        <a href="${item.fbLink}" target="_blank" class="btn-fb" onclick="event.stopPropagation()">У Facebook <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
                    </div>
                </div>
            </div>
        `;
    });

    renderPagination();
}

function renderPagination() {
    const paginationContainer = document.getElementById('pagination-container');
    if (!paginationContainer) return;

    const totalPages = Math.ceil(newsData.length / itemsPerPage);
    if (totalPages <= 1) {
        paginationContainer.innerHTML = '';
        return;
    }

    let html = '';
    for (let i = 1; i <= totalPages; i++) {
        html += `<button class="page-btn ${i === currentPage ? 'active' : ''}" onclick="changeNewsPage(${i})">${i}</button>`;
    }

    if (currentPage < totalPages) {
        html += `<button class="page-btn" onclick="changeNewsPage(${currentPage + 1})">Далі →</button>`;
    }

    paginationContainer.innerHTML = html;
}

function changeNewsPage(page) {
    renderNews(page);
    const newsSection = document.getElementById('news');
    if (newsSection) {
        newsSection.scrollIntoView({ behavior: 'smooth' });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderVacancies();
    renderNews(1);
    initHeroSlider();
});

const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => { mobileMenu.classList.toggle('hidden'); });
    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => { mobileMenu.classList.add('hidden'); });
    });
}

const vacModal = document.getElementById('vacancy-modal');
const vacTitle = document.getElementById('vac-modal-title');
const vacSalary = document.getElementById('vac-modal-salary');

function openVacancyModal(index) {
    const vac = vacanciesData[index];
    vacTitle.textContent = vac.title;
    vacSalary.textContent = vac.salary;
    vacModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeVacancyModal() {
    vacModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

if (vacModal) {
    vacModal.addEventListener('click', (e) => { if (e.target === vacModal) closeVacancyModal(); });
}

const modal = document.getElementById('news-modal');
const modalTitle = document.getElementById('modal-title');
const modalTag = document.getElementById('modal-tag');
const modalText = document.getElementById('modal-text');
const modalGallery = document.getElementById('modal-gallery');
const modalFbLink = document.getElementById('modal-fb-link');

function openModal(index) {
    const item = newsData[index];
    modalTitle.textContent = item.title;
    modalTag.textContent = item.tag;
    modalText.innerHTML = item.full;
    if (modalFbLink) modalFbLink.href = item.fbLink;
    
    modalGallery.innerHTML = '';
    if (item.extraImgs && item.extraImgs.length > 0) {
        item.extraImgs.forEach(imgSrc => {
            modalGallery.innerHTML += `<img src="${imgSrc}" alt="Фото події" onclick="openLightbox('${imgSrc}')">`;
        });
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    modal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

if (modal) {
    modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
}

function openLightbox(imgSrc) {
    let lightbox = document.getElementById('fullscreen-lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'fullscreen-lightbox';
        lightbox.className = 'lightbox-modal hidden';
        lightbox.innerHTML = `
            <div class="lightbox-content-wrapper">
                <button class="lightbox-close" onclick="closeLightbox()" aria-label="Закрити"><i class="fa-solid fa-xmark"></i></button>
                <img id="lightbox-img" src="" alt="Повнорозмірне фото">
            </div>
        `;
        document.body.appendChild(lightbox);
        lightbox.addEventListener('click', (e) => { 
            if (e.target === lightbox || e.target.classList.contains('lightbox-content-wrapper')) {
                closeLightbox(); 
            }
        });
    }
    document.getElementById('lightbox-img').src = imgSrc;
    lightbox.classList.remove('hidden');
}

function closeLightbox() {
    const lightbox = document.getElementById('fullscreen-lightbox');
    if (lightbox) lightbox.classList.add('hidden');
}