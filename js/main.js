function toggleMenu() {
  const menuBtn = document.querySelector('.menu-btn__open');
  const closeBtn = document.querySelector('.menu-btn__close');
  const nav = document.querySelector('.nav');

  menuBtn.classList.toggle('menu-btn-active');
  closeBtn.classList.toggle('menu-btn-active');
  nav.classList.toggle('nav-active');
}
