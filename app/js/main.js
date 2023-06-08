const headerElement = document.getElementsByClassName('header')[0];
const menu__list_linkElement = document.getElementsByClassName('menu__list-link');
const instagramElement = document.getElementsByClassName('instagram')[0];

addEventListener('scroll', (event) => {
  if (window.scrollY > 0) {
    headerElement.classList.add('header--scrolled');
    for (let link of menu__list_linkElement) {
      link.classList.add('menu__list-link--scrolled');
    }
    instagramElement.classList.add('instagram--scrolled');
  } else {
    headerElement.classList.remove('header--scrolled');
    for (let link of menu__list_linkElement) {
      link.classList.remove('menu__list-link--scrolled');
    }
    instagramElement.classList.remove('instagram--scrolled');
  }
});
