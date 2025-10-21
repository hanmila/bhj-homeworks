const reveals = document.querySelectorAll('.reveal');

function checkVisibility() {
    reveals.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        if (rect.top < windowHeight && rect.bottom > 0) {
            element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active');
        }
    });
}

window.addEventListener('scroll', checkVisibility);

checkVisibility();
