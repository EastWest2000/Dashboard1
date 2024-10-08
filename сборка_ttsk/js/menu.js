
const menuIcon = document.querySelector('.menu-icon');
const sidebarMenu = document.querySelector('.sidebar');
const body = document.body;

menuIcon.addEventListener('click', function () {
    sidebarMenu.classList.toggle('active');  // Используем toggle для переключения класса
    
    if (sidebarMenu.classList.contains('active')) {
        body.classList.add('no-scroll');  // Останавливаем скроллинг при открытом меню
    } else {
        setTimeout(() => {
            body.classList.remove('no-scroll');  // Возвращаем скроллинг после завершения анимации закрытия
        }, 500);  // Устанавливаем задержку для завершения анимации (500ms)
    }
});
