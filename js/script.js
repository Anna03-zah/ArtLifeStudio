// Переменные для меню
let navArt = document.querySelector('.header .navArt');
let menuBtn = document.querySelector('#menu-btn');

// Обработчик клика на кнопку меню
menuBtn?.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times'); // Меняем иконку кнопки
    navArt?.classList.toggle('active'); // Добавляем/удаляем класс активности у навигации
});

// Закрытие меню при клике вне его
document.addEventListener('click', (e) => {
    if (menuBtn && navArt && !menuBtn.contains(e.target) && !navArt.contains(e.target)) {
        menuBtn.classList.remove('fa-times');
        navArt.classList.remove('active');
    }
});

// Инициализация Swiper для главного слайдера
const homeSwiper = new Swiper('.home-slider', {
    loop: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
});

// Инициализация Swiper для портфолио
const portfolioSwiper = new Swiper('.portfolio-slider', {
    grabCursor: true,
    loop: true,
    centeredSlides: true,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
    },
});

// Превью в портфолио
let previewContainer = document.querySelector('.portfolio-preview-container');
let previewBox = previewContainer?.querySelectorAll('.portfolio-preview');

document.querySelectorAll('.portfolio .slide').forEach(portfolio => {
    portfolio.addEventListener('click', () => {
        previewContainer.style.display = 'flex';
        let name = portfolio.getAttribute('data-name');
        previewBox?.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name === target) {
                preview.classList.add('active');
            }
        });
    });
});

// Закрытие превью
previewContainer?.querySelector('#close-preview')?.addEventListener('click', () => {
    previewContainer.style.display = 'none';
    previewBox?.forEach(close => {
        close.classList.remove('active');
    });
});

// Работа с модальным окном калькулятора
const calculatorModal = document.querySelector('#calculator-modal');
const openCalculatorBtn = document.querySelector('#open-calculator');
const closeCalculatorBtn = document.querySelector('#close-btn');

// Открытие модального окна
openCalculatorBtn?.addEventListener('click', () => {
    calculatorModal.style.display = 'flex';
});

// Закрытие модального окна
closeCalculatorBtn?.addEventListener('click', () => {
    calculatorModal.style.display = 'none';
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', (e) => {
    if (e.target === calculatorModal) {
        calculatorModal.style.display = 'none';
    }
});

document.querySelectorAll('.filter-button').forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      document.querySelectorAll('.gallery-item').forEach(item => {
        if (filter === 'all' || item.classList.contains(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });


// Калькуклятор стоимости проекта
const openModalBtn = document.getElementById('open-calculator');
const closeModalBtn = document.getElementById('close-btn');
const modal = document.getElementById('calculator-modal');

// Открытие модального окна
openModalBtn.addEventListener('click', function () {
    modal.style.display = 'flex';
});

// Закрытие модального окна
closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
});

// Закрытие модального окна при клике вне его
window.addEventListener('click', function (event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

// Обработка кнопки "Рассчитать"
document.getElementById('calculateBtn').addEventListener('click', function () {
    const projectType = document.getElementById('projectType').value;
    const projectSize = document.getElementById('projectSize').value;
    const complexity = document.getElementById('complexity').value;

    // Проверка на заполнение обязательного поля
    if (!projectSize) {
        document.getElementById('result').textContent = "Пожалуйста, введите площадь проекта.";
        return;
    }

    // Установка базовой стоимости
    let basePrice = 0;
    if (projectType === "residential") {
        basePrice = 1000;
    } else if (projectType === "commercial") {
        basePrice = 1500;
    } else if (projectType === "public") {
        basePrice = 2000;
    }

    // Множитель сложности
    let complexityMultiplier = 1;
    if (complexity === "medium") {
        complexityMultiplier = 1.2;
    } else if (complexity === "high") {
        complexityMultiplier = 1.5;
    }

    // Итоговый расчёт стоимости
    const totalPrice = basePrice * projectSize * complexityMultiplier;
    document.getElementById('result').textContent = `Стоимость проекта: ${totalPrice.toFixed(2)} рублей.`;
});

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Предотвращает стандартную отправку формы
  
    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });
  
    // Пример: Выводим данные формы в консоль
    console.log('Данные формы:', data);
  
    // Отправка данных на сервер (здесь используем fetch как пример)
    fetch('https://example.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(result => alert('Заявка отправлена успешно!'))
    .catch(error => alert('Ошибка при отправке заявки: ' + error));
  });