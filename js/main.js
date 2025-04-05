const elSiteThemeToggler = document.querySelector('.js-site-header-theme-toggler');

elSiteThemeToggler.addEventListener('click', function () {
  document.body.classList.toggle('dark-mode');
});