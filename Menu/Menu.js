class Menu {
  constructor(menu){
    this.menuOpen = menu.querySelector('.menu');
    this.menuButton = menu.querySelector('.menu-button');
    this.menuButton.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu(){
    this.menu.classList.toggleAttribute('toggle-on');
    // Toggle the "menu--open" class on your menu refence. 
  }
}

// Start Here: Create a reference to the ".menu" class
const menus = document.querySelectorAll('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
// Using your menuButton reference, add a click handler that calls toggleMenu

menus.forEach(menu => new Menu (menu));