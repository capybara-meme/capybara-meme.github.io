let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

setInterval(() => {
    items[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % totalItems;
    items[currentIndex].classList.add('active');
    document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * 100}%)`;
}, 3000);  // Смена слайда каждые 3 секунды
