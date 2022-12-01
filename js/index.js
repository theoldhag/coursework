window.addEventListener('DOMContentLoaded', function () {

  //Бургер меню

  document.querySelector('#burger').addEventListener('click', function () {
    document.querySelector('#burgernav').classList.add('active-menu')
  })
})

window.addEventListener('DOMContentLoaded', function () {
  document.querySelector('#burgernav').addEventListener('click', function () {
    document.querySelector('.header__nav').classList.remove('active-menu')
  })
})

//Выпадающее меню

document.querySelectorAll('.menu__nav-button').forEach(function (menubutton) {
  menubutton.addEventListener('click', function (event) {
    document.querySelectorAll('.menu__dropdown').forEach(function (menuContent) {
      menuContent.classList.remove('drop__down-active')
    })
    const path = event.currentTarget.dataset.path
    document.querySelector(`[data-target="${path}"]`).classList.add('drop__down-active')
    // document.querySelector('.menu__nav-button').classList.add('123')
  })

  // document.querySelectorAll('.123').addEventListener('click', function (ev) {    
  //   ev.classList.remove('drop__down-active')
   
  // })
})

// Поиск 

document.querySelector('#search-button').addEventListener('click', function () {
  document.querySelector('.header__search-input').classList.add('header__search-input_active')
})
document.querySelector('#search-button').addEventListener('click', function () {
  document.querySelector('.header__search-form').classList.add('header__search-form-active')
})
document.querySelector('#search-button').addEventListener('click', function () {
  document.querySelector('.header__close-button').classList.add('close__button-active')
})
document.querySelector('.header__close-button').addEventListener('click', function () {
  document.querySelector('.header__search-form').classList.remove('header__search-form-active')
})
document.querySelector('.header__close-button').addEventListener('click', function () {
  document.querySelector('.header__search-input').classList.remove('header__search-input_active')
})
document.querySelector('.header__close-button').addEventListener('click', function () {
  document.querySelector('.header__close-button').classList.remove('close__button-active')
})

// Табы каталог страны

document.querySelectorAll('.tabs__item').forEach(function (tabsbutton) {
  tabsbutton.addEventListener('click', function (event2) {
    const path = event2.currentTarget.dataset.path
    document.querySelectorAll('.section-catalog__item-info').forEach(function (tabContent) {
      tabContent.classList.remove('section-catalog__info-active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('section-catalog__info-active')
  })
})

//Табы художники

document.querySelectorAll('.artist').forEach(function (tabsbutton) {
  tabsbutton.addEventListener('click', function (event3) {
    const path = event3.currentTarget.dataset.path
    document.querySelectorAll('.artist-info').forEach(function (tabContent) {
      tabContent.classList.remove('artist-info_active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('artist-info_active')
  })
})

//Модальные окна

document.querySelectorAll('.swiper-slide1').forEach(function (tabsbutton) {
  tabsbutton.addEventListener('click', function (event3) {
    const path = event3.currentTarget.dataset.path
    document.querySelectorAll('.gallery__modal-item').forEach(function (tabContent) {
      tabContent.classList.remove('gallery__modal-item_active')
    })
    document.querySelector(`[data-target="${path}"]`).classList.add('gallery__modal-item_active')
  })
})
// document.querySelectorAll('.swiper-slide1').forEach(function (tabsbutton) {
//   tabsbutton.addEventListener('keyup', function (event3) {
//     const path = event3.currentTarget.dataset.path
//     document.querySelectorAll('.gallery__modal-item').forEach(function (tabContent) {
//       tabContent.classList.remove('gallery__modal-item_active')
//     })
//     document.querySelector(`[data-target="${path}"]`).classList.add('gallery__modal-item_active')
//   })
// })

document.querySelectorAll('.modal_close-button').forEach(function (tabsbutton2) {
  tabsbutton2.addEventListener('click', function (event5) {
    const path = event5.currentTarget.dataset.path
    document.querySelectorAll('.gallery__modal-item').forEach(function (tabContent) {
      tabContent.classList.remove('gallery__modal-item_active')
    })
  })
})

// document.querySelector('.artist').addEventListener('click', function () {
//   document.scrollTo('#artist-info')
// })

//Прокрутка//

jQuery(document).ready(function () {
  jQuery("a.scrollto").click(function () {
    elementClick = jQuery(this).attr("href")
    destination = jQuery(elementClick).offset().top - 170;
    jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1100);
    return false;
  });
});


// События

document.querySelector('.section-events__button').addEventListener('click', function () {

  document.querySelectorAll('.section-events__item').forEach(function (allEvents) {
    allEvents.classList.add('events-item-active')
  })
  document.querySelectorAll('.swiper-wrapper4').forEach(function (allEvents) {
    allEvents.classList.add('swiper-wrapper4_active')
  })
  document.querySelectorAll('.section-events__content').forEach(function (allEvents) {
    allEvents.classList.add('section-events__content_active')
  })
})
document.querySelector('.section-events__button').addEventListener('click', function () {
  document.querySelector('.section-events__button').classList.add('events__button-disable')
})

//  Аккордеон каталога

$(function () {
  $("#accordion").accordion({
    active: 0,
    collapsible: true,
    heightStyle: "content",
  });
});

$(function () {
  $("#accordion2").accordion({
    active: 0,
    collapsible: true,
    heightStyle: "content",
  });
});

$(function () {
  $("#accordion3").accordion({
    active: 0,
    collapsible: true,
    heightStyle: "content",
  });
});

$(function () {
  $("#accordion4").accordion({
    active: 0,
    collapsible: true,
    heightStyle: "content",
  });
});

$(function () {
  $("#accordion5").accordion({
    active: 0,
    collapsible: true,
    heightStyle: "content",
  });
});


// SWIPER

var mySwiper = new Swiper('.swiper-container1', {
  loop: false,
  slidesPerView: 1,
  slidesPerGroup: 1,
  grid: {
    rows: 1,
    column: 1,
    fill: 'row'
  },
  spaceBetween: 10,
  loopedSlides: 24,
  initialSlide: 1,
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction'
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
        column: 3,
        fill: 'row'
      },
      spaceBetween: 50,
    },
    668: {
      slidesPerView: 2,
      slidesPerGroup: 3,
      grid: {
        rows: 2,
        column: 2,
        fill: 'row',
      },
      spaceBetween: 32,
    },
  },
});

var mySwiper2 = new Swiper('.swiper-container2', {
  // autoplay: {
  //   delay: 3000,
  //   desableOnInteaction: true,
  //   speed: 5000,
  // },
  grid: {
    column: 2,
    fill: 'column',
  },
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1281: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    900: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 49,
    },
    769: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 0,
    },
    568: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
  },
});

var mySwiper3 = new Swiper('.swiper-container3', {
  slidesPerView: 3,
  spaceBetween: 50,
  slidesPerGroup: 3,
  loopedSlides: 12,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 34,
    },
  },
});

var mySwiper4 = new Swiper('.swiper-container4', {
  slidesPerView: 1,
  spaceBetween: 50,
  slidesPerGroup: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },

  breakpoints: {
    1280: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,

    },



    961: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,

    },

    668: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },


  },


});

//Прокрутка//

jQuery(document).ready(function () {
  jQuery("a.artist").click(function () {
    elementClick = jQuery(this).attr("href")
    if (window.innerWidth < 569) {
      destination = jQuery(elementClick).offset().top + 1300;
    }
    else if (window.innerWidth < 769) {
      destination = jQuery(elementClick).offset().top + 1150;
    }
    else {
      destination = jQuery(elementClick).offset().top - 50;
    };
    jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: destination }, 1100);
    return false;
  })
})

//Карта//

ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map("map", {
    center: [55.759, 37.6305],

    zoom: 14,
    controls: []
  });

  var myGeoObject = new ymaps.GeoObject({
    geometry: {
      type: "Point",
      coordinates: [48.87, 2.35]
    }
  });

  var myPlacemark = new ymaps.Placemark([48.87, 2.35], {}, {
    iconLayout: 'default#image',
    iconImageHref: '',
    iconImageSize: [30, 42],
    iconImageOffset: [-5, -38]
  });

  myMap.geoObjects.add(myPlacemark);
}


document.addEventListener("DOMContentLoaded", function () {
  const validation = new JustValidate('.form');
  const selector = document.querySelector("input[type='tel']");
  const im = new Inputmask("+7 (999)-999-99-99");
  im.mask(selector);

  validation
    .addField('.name', [{
        rule: 'minLength',
        value: 3,
        errorMessage: "Не достаточное количество символов"
      },
      {
        rule: 'maxLength',
        value: 15,
        errorMessage: "Вы ввели больше чем положено"
      },
      {
        rule: 'regex',
        value: '[A-Za-z]',
        errorMessage: "символы запрещены"
      },
      
     
    ])
    
    .addField('.tel', [{
      rule: "function",
      validator: function (name, value) {
        const phone = selector.inputmask.unmaskedvalue();
        return phone.length === 10
      },
      errorMessage: 'Не достаточное количество символов в строке',
    }]);
})












