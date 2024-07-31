document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    const slides = document.querySelector('.img-phone');
    const totalSlides = buttons.length;
    
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            slides.style.transform = `translateX(-${index * 5}%)`;
            updateActiveButton(index);
        });
    });

    function updateActiveButton(index) {
        buttons.forEach(button => button.classList.remove('active'));
        buttons[index].classList.add('active');
    }

    // Optional: Set the first button as active initially
    updateActiveButton(0);
});