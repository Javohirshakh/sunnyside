var modifiers = {
  siteHeaderOpen: 'site-nav--open'
};

var elSiteHeader = document.querySelector('.site-nav');
var elSiteHeaderToggler = document.querySelector('.js-hamburger');

if (elSiteHeaderToggler) {
  elSiteHeaderToggler.addEventListener('click', function () {
    // alert('salom')
    elSiteHeader.classList.toggle(modifiers.siteHeaderOpen);
    this.classList.toggle('opened')
  });
}