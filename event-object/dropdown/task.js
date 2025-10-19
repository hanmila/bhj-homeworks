const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {

    const value = dropdown.querySelector('.dropdown__value');
    const list = dropdown.querySelector('.dropdown__list');
    const items = dropdown.querySelectorAll('.dropdown__link');

    value.addEventListener('click', () => {
        list.classList.toggle('dropdown__list_active');
    });

    items.forEach(item => {
        item.addEventListener('click', event => {
            event.preventDefault();
            value.textContent = item.textContent.trim();
            list.classList.remove('dropdown__list_active');
        });
    });
});
