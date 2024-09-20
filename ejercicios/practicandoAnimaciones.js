document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    const updateSlidePosition = () => {
        const offset = -currentIndex * 100;
        slides.style.transform = `translateX(${offset}%)`;
    };

    document.querySelector('.nav .prev').addEventListener('click', () => {
        currentIndex = (currentIndex > 0) ? currentIndex - 1 : slideCount - 1;
        updateSlidePosition();
    });

    document.querySelector('.nav .next').addEventListener('click', () => {
        currentIndex = (currentIndex < slideCount - 1) ? currentIndex + 1 : 0;
        updateSlidePosition();
    });
});
