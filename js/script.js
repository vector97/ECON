// Меню бургер

const iconMenu = document.querySelector('.menu__icon')
if (iconMenu) {
  const menuBody = document.querySelector('.menu__body')
  iconMenu.addEventListener('click', function (e) {
    document.body.classList.toggle('_lock')
    iconMenu.classList.toggle('_active')
    menuBody.classList.toggle('_active')
  });
}

// Выпадающие фильтры

const arrowsFilter = document.querySelectorAll('.filters__category-heading')
if (arrowsFilter) {
  const filter = document.querySelectorAll('.filter')
  arrowsFilter.forEach((arrow, index) => {
    arrow.addEventListener('click', () => {
      arrowsFilter.forEach((arrowItem, idx) => {
        if (arrowItem === arrow) {
          filter[idx].classList.toggle('filter_close')
        }
      })
    })
  })
}

// Кнопка показать ещё

let showMore = document.querySelectorAll('.main__show-more');
for (let i = 0; i < showMore.length; i++) {
  showMore[i].addEventListener('click', function() {
    let showPerClick = 2;

    let hidden = this.parentNode.querySelectorAll('.card_hidden');
    for (let i = 0; i < showPerClick; i++) {
      if (!hidden[i]) return this.outerHTML = "";

      hidden[i].classList.remove('card_hidden');
    }
  });
}
