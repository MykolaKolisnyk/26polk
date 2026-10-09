/* ==========================================
   DEVELOPER SIGNATURE: Mykola Kolisnyk
   Project: 26 Zakarpattia Regiment Web App
   ========================================== */

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
        snippet: "Подолати перешкоди, затримати правопорушника і знайти людину за запахом, – кожна вправа під час тренування службових собак має практичне значення...",
        full: "Подолати перешкоди, затримати правопорушника і знайти людину за запахом, – кожна вправа під час тренування службових собак має практичне значення. Кінологи 26-го Закарпатського полку НГУ разом зі своїми чотирилапими побратимами щоденно відпрацьовують спеціальні завдання задля ефективного виконання службово-бойових обов'язків та безпеки громадян.",
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
        full: "У селищі Середнє відбулася єпархіальна проща капеланів і військовослужбовців. До молитовного заходу долучилися і нацгвардійці 26 Закарпатського полку НГУ.<br><br>Архиєрейську Божественну Літургію очолив голова Департаменту військового капеланства Патріаршої курії Української Греко-Католицької Церкви єпископ Богдан. Під час богослужіння присутні молилися за українських військовослужбовців, мир та перемогу України.",
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
        snippet: "Гвардійці 26 Закарпатського полку долучилися до відкритого тренування з адаптивного кікбоксингу для ветеранів і військовослужбовців...",
        full: "Гвардійці 26 Закарпатського полку долучилися до відкритого тренування з адаптивного кікбоксингу для ветеранів і військовослужбовців. Захід організували у спортивному клубі Golden Scorpion Gym з ініціативи громадської організації «Золотий Скорпіон» в межах проєкту «Психологічна підтримка та реабілітація ветеранів через адаптивні єдиноборства» за підтримки Департаменту соціальної політики Ужгородської міської ради.<br><br>Тренування провели багаторазові переможці чемпіонатів України, Кубків світу та Європи з кікбоксингу WAKO. Учасники працювали з тренерами та спортсменами, виконували вправи на техніку ударів, координацію і фізичну витривалість.",
        fbLink: "https://www.facebook.com/ngu3115"
    }
];

// Захист від інструментів розробника
document.addEventListener('keydown', (e) => {
    if (
        e.key === 'F12' || 
        (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J')) || 
        (e.ctrlKey && e.key === 'U')
    ) {
        e.preventDefault();
        return false;
    }
});

// Рендеринг карток новин
function renderNews() {
    const container = document.getElementById('news-container');
    if (!container) return;

    container.innerHTML = '';
    newsData.forEach((item, index) => {
        container.innerHTML += `
            <div class="news-card" onclick="openModal(${index})">
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
}

document.addEventListener('DOMContentLoaded', renderNews);

// Мобільне меню
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });

    document.querySelectorAll('#mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('hidden');
        });
    });
}

// Модальне вікно та галерея
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
    
    if (modalFbLink) {
        modalFbLink.href = item.fbLink;
    }
    
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
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }
    });
}

// Функція для відкриття фото на весь екран (Lightbox)
function openLightbox(imgSrc) {
    let lightbox = document.getElementById('fullscreen-lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.id = 'fullscreen-lightbox';
        lightbox.className = 'lightbox-modal hidden';
        lightbox.innerHTML = `
            <button class="lightbox-close" onclick="closeLightbox()"><i class="fa-solid fa-xmark"></i></button>
            <img id="lightbox-img" src="" alt="Повнорозмірне фото">
        `;
        document.body.appendChild(lightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    }
    document.getElementById('lightbox-img').src = imgSrc;
    lightbox.classList.remove('hidden');
}

function closeLightbox() {
    const lightbox = document.getElementById('fullscreen-lightbox');
    if (lightbox) {
        lightbox.classList.add('hidden');
    }
}