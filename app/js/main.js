const headerElement = document.getElementsByClassName('header')[0];
const menu__list_linkElement = document.getElementsByClassName('menu__list-link');
const instagramElement = document.getElementsByClassName('instagram')[0];
const menu__mobile_button_openElement = document.getElementsByClassName(
  'menu__mobile_button_open',
)[0];
const menu__mobileElement = document.getElementsByClassName('menu__mobile')[0];
const body = document.getElementsByTagName('body')[0];

let isOpenMenuMoblie = false;

function scrollDisable() {
  const TopScroll = window.scrollY || document.documentElement.scrollTop;
  const LeftScroll = window.scrollX || document.documentElement.scrollLeft;

  window.onscroll = function () {
    window.scrollTo({ behavior: 'instant', left: LeftScroll, top: TopScroll });
  };
}

function scrollEnable() {
  window.onscroll = function () {};
}

function setScrolledHeader() {
  headerElement.classList.add('header--scrolled');
  for (let link of menu__list_linkElement) {
    link.classList.add('menu__list-link--scrolled');
  }
  instagramElement.classList.add('instagram--scrolled');
}

function unsetScrolledHeader() {
  headerElement.classList.remove('header--scrolled');
  for (let link of menu__list_linkElement) {
    link.classList.remove('menu__list-link--scrolled');
  }
  instagramElement.classList.remove('instagram--scrolled');
}

addEventListener('scroll', (event) => {
  if (window.scrollY > 0 || isOpenMenuMoblie) {
    setScrolledHeader();
  } else {
    unsetScrolledHeader();
  }
});

function handlerMenuMoblieOpenClick() {
  isOpenMenuMoblie = !isOpenMenuMoblie;

  if (isOpenMenuMoblie) {
    setScrolledHeader();

    body.classList.add('noscroll');
    scrollDisable();

    menu__mobileElement.classList.add('menu__mobile--opened');
    menu__mobile_button_openElement.classList.add('menu__mobile_button_open--opened');
  } else {
    if (window.scrollY === 0) {
      unsetScrolledHeader();
    }

    body.classList.remove('noscroll');
    scrollEnable();

    menu__mobileElement.classList.remove('menu__mobile--opened');
    menu__mobile_button_openElement.classList.remove('menu__mobile_button_open--opened');
  }
}
