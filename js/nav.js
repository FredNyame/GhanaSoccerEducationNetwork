/*
>> Mobile nav Js to show and hide on click of the menu
*/

(function () {
  //Get the element
  const menuItem = document.querySelector('.mobile-container');
  const dateElm = document.querySelector('#date');
  let colMain = document.querySelector('.col-row');
  colMain.addEventListener('click', serviceDesc, true);

  //Use Js to change the year for the footer Copyright
  dateElm.innerHTML = new Date().getFullYear();
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

  //function to show sevice info
  function serviceDesc(e){
    //console.log(e.target);
    let rowCol  = colMain.querySelectorAll('.col-3');
    let rowLen = rowCol.length;
    //loop through them to add an event
    for (let i = 0; i < rowLen; i++) {
       let learnTags = rowCol[i].querySelectorAll('.strong');
       let learnLen = learnTags.length;
       for (let j = 0; j < learnLen; j++) {
         let descTag = learnTags[j].parentNode.parentNode.nextElementSibling;
         if(e.target === learnTags[j]){
           descTag.classList.add('show');
           console.log('show');
         } else{
          descTag.classList.remove('show');
         }
       }
     }
  }
})();