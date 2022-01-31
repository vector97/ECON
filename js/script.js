// Меню бургер

const iconMenu = document.querySelector('.menu__icon')
if (iconMenu) {
  const menuBody = document.querySelector('.menu__body')
  iconMenu.addEventListener('click', function () {
    document.body.classList.toggle('body_lock')
    iconMenu.classList.toggle('menu__icon_active')
    menuBody.classList.toggle('menu__body_active')
  });
}

// Выпадающие списки меню

const arrowsMenu = document.querySelectorAll('.menu__title')
if (arrowsMenu) {
  const menuList = document.querySelectorAll('.menu__list')
  arrowsMenu.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      arrowsMenu.forEach((arrowItem, idx) => {
        if (arrowItem === arrow) {
          arrowsMenu[idx].classList.toggle('menu__title_close')
          menuList[idx].classList.toggle('menu_close')
        }
      })
    })
  })
}

// Выпадающие фильтры

const arrowsFilter = document.querySelectorAll('.filters__category-heading')
if (arrowsFilter) {
  const filter = document.querySelectorAll('.filter')
  arrowsFilter.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      arrowsFilter.forEach((arrowItem, idx) => {
        if (arrowItem === arrow) {
          filter[idx].classList.toggle('filter_close')
        }
      })
    })
  })
}

// Мобильный фильтр

const openFilter = document.querySelectorAll('.filters__title_mobile')
if (openFilter) {
  const filterBody = document.querySelector('.filters__body')
  openFilter.forEach((arrow) => {
    arrow.addEventListener('click', () => {
      openFilter.forEach((arrowItem, idx) => {
        if (arrowItem === arrow) {
          document.body.classList.toggle('body_lock')
          filterBody.classList.toggle('filters__body_open')
        }
      })
    })
  })
}

// const openFilter = document.querySelectorAll('.filters__title_mobile')
// if (openFilter) {
//   const filterBody = document.querySelector('.filters__body')
//   openFilter.addEventListener('click', function () {
//     document.body.classList.toggle('body_lock')
//     filterBody.classList.toggle('filters__body_open')
//   });
// }

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

// слайдер цены

$(function() {

  // Initiate Slider
  $('#slider-range').slider({
    range: true,
    min: 3000,
    max: 30000,
    step: 100,
    values: [3000, 30000]
  });

  // Move the range wrapper into the generated divs
  $('.ui-slider-range').append($('.range-wrapper'));

  // Apply initial values to the range container
  $('.range').html('<span class="range-value">' + $('#slider-range').slider("values", 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '<sup>₽</sup></span><span class="range-divider"></span><span class="range-value">' + $("#slider-range").slider("values", 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '<sup>₽</sup></span>');




  // Rotate the gears
  var gearOneAngle = 0,
    gearTwoAngle = 0,
    rangeWidth = $('.ui-slider-range').css('width');


  $('#slider-range').slider({
    slide: function(event, ui) {

      // Update the range container values upon sliding

      $('.range').html('<span class="range-value">' + ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '<sup>₽</sup></span><span class="range-divider"></span><span class="range-value">' + ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,") + '<sup>₽</sup></span>');

      // Get old value
      var previousVal = parseInt($(this).data('value'));

      // Save new value
      $(this).data({
        'value': parseInt(ui.value)
      });

      }

  });



});
