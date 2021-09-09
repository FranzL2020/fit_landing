function toggleMenu () {
    const toggleMenu = document.querySelector('.toggleMenu');
    const header__navigation = document.querySelector('.header__navigation');
    toggleMenu.classList.toggle('active');
    header__navigation.classList.toggle('active');
  }