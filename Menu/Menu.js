const toggleMenu = () => {
  // Toggle the "menu--open" class on your menu reference.
  menu.classList.toggle('menu--open');
};

// Start Here: Create a reference to the ".menu" class
const menu = document.querySelector('.menu');
// create a reference to the ".menu-button" class
const menuButton = document.querySelector('.menu-button');
console.log(menuButton);
menuButton.addEventListener('click', () => toggleMenu());
// Using your menuButton reference, add a click handler that calls toggleMenu

/* Click anywhere to close/open menu

const allArticles = document.querySelector('.articles');
allArticles.addEventListener('click', () => toggleMenu());
*/