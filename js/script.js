const swiper = new Swiper('.slider-main-block', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.body-main-block__arrow.swiper-button-next',
        prevEl: '.body-main-block__arrow.swiper-button-prev',
    },
});

// tabs

const tabButtons = document.querySelectorAll('.tabs-deals__button');
const tabItems = document.querySelectorAll('.item-tabs');
document.addEventListener('click', function (e) {
    const targetElement = e.target;
    let curruntActiveIndex = null;
    let newActiveIndex = null;
    if (targetElement.closest('.tabs-deals__button')) {
        tabButtons.forEach((tabButton, index) => {
            if (tabButton.classList.contains('active')) {
                curruntActiveIndex = index;
                tabButton.classList.remove('active');
            }
            if (tabButton === targetElement) {
                newActiveIndex = index;
            }
        });
        targetElement.classList.add('active');
        tabItems[curruntActiveIndex].classList.remove('active');
        tabItems[newActiveIndex].classList.add('active');
    }
})