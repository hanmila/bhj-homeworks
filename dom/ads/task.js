const rotators = document.querySelectorAll('.rotator');

rotators.forEach(rotator => {
    const cases = rotator.querySelectorAll('.rotator__case');
    let activeIndex = 0;

    function rotate() {
        cases[activeIndex].classList.remove('rotator__case_active');
        activeIndex = (activeIndex + 1) % cases.length;
        const nextCase = cases[activeIndex];
        nextCase.classList.add('rotator__case_active');
        nextCase.style.color = nextCase.dataset.color || 'black';
        const delay = parseInt(nextCase.dataset.speed) || 1000;
        setTimeout(rotate, delay);
    }

    const first = cases[activeIndex];
    first.style.color = first.dataset.color || 'black';

    setTimeout(rotate, parseInt(first.dataset.speed) || 1000);
});
