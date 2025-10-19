const tabsContainers = document.querySelectorAll('.tabs');

tabsContainers.forEach(tabsContainer => {
  const tabs = Array.from(tabsContainer.querySelectorAll('.tab'));
  const contents = Array.from(tabsContainer.querySelectorAll('.tab__content'));

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('tab_active'));
      contents.forEach(c => c.classList.remove('tab__content_active'));

      tab.classList.add('tab_active');

      const index = tabs.indexOf(tab);

      contents[index].classList.add('tab__content_active');
    });
  });
});
