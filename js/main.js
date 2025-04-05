const elSiteThemeToggler = document.querySelector('.js-site-header-theme-toggler');


if (localStorage.getItem('name') === 'dark-mode') {
  document.body.classList.add('dark-mode');
}

if (elSiteThemeToggler) {
  elSiteThemeToggler.addEventListener('click', function() {
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('name', 'light-mode');
      document.body.classList.remove('dark-mode');
    } else {
      localStorage.setItem('name', 'dark-mode');
      document.body.classList.add('dark-mode');
    }
  });
}