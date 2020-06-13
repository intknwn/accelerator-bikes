'use strict';

(function () {
  var nav = document.querySelector('.site-nav');
  var navToggle = document.querySelector('.site-header__nav-toggle');

  nav.classList.remove('site-nav--nojs');
  nav.classList.add('site-nav--closed');
  navToggle.classList.add('site-header__nav-toggle--closed');

  navToggle.addEventListener('click', function () {
    if (nav.classList.contains('site-nav--closed')) {
      nav.classList.remove('site-nav--closed');
      nav.classList.add('site-nav--opened');
      navToggle.classList.remove('site-header__nav-toggle--closed');
    } else {
      nav.classList.add('site-nav--closed');
      nav.classList.remove('site-nav--opened');
      navToggle.classList.add('site-header__nav-toggle--closed');
    }
  });
})();
