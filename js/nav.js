/*
>> Mobile nav Js to show and hide on click of the menu
*/

(function () {
  //Get the element
  const menuItem = document.querySelector('.mobile-container');
  //li items 
  const menuItems = document.querySelectorAll('.nav_li');
  //Add event to click
  menuItem.addEventListener('click', showMenu);
  //function to do the showing of the elements
  function showMenu(){
    menuItem.classList.toggle('change');
    document.querySelector('.main_nav').classList.toggle('right-show');
    menuItems.forEach(item => item.classList.toggle('right-show'));
  }
})();