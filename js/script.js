let navArt = document.querySelector('.header .navArt');
let menuBtn = document.querySelector('#menu-btn');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    navArt.classList.toggle('active');
};

var swiper = new Swiper(".home-slider", {
    grabCursor: true,
    loop: true,
    centeredSlides: true, 
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    loop: true,
});

var swiper = new Swiper(".portfolio-slider", {
  grabCursor: true,
  loop: true,
  centeredSlides: true, 
  spaceBetween: 20,
  pagination: {
    el: ".swiper-pagination",
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
  loop: true,
});

let previewContainer = document.querySelector('.portfolio-preview-container');
let previewBox = previewContainer.querySelectorAll('.portfolio-preview');

document.querySelectorAll('.portfolio .slide').forEach(portfolio =>{
    portfolio.onclick = () => {
       previewContainer.style.display = 'flex';
       let name = portfolio.getAttribute('data-name');
       previewBox.forEach(preveiw =>{
           let target = preveiw.getAttribute('data-target');
           if(name == target){
              preveiw.classList.add('active');
           }
       });
    };
});

previewContainer.querySelector('#close-preview').onclick = () =>{
        previewContainer.style.display = 'none';
        previewBox.forEach(close =>{
            close.classList.remove('active');
  });       
}

 // Получаем элементы формы и уведомления
 const form = document.getElementById('contactForm');
 const notification = document.getElementById('notification');

 // Функция для обработки отправки формы
 form.addEventListener('submit', function(event) {
     event.preventDefault(); // Останавливаем стандартное поведение формы

     // Проверяем, все ли поля заполнены
     const name = document.getElementById('name').value;
     const email = document.getElementById('email').value;
     const message = document.getElementById('message').value;

     if (name && email && message) {
         // Показать уведомление
         notification.classList.remove('hidden');

         // Очищаем форму
         form.reset();
     }
 });