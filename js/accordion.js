(function (){//Get the items to click on
let buttonClick = document.querySelectorAll('.faq-show');
//loop through to add event listener
buttonClick.forEach(btn => btn.addEventListener('click', showPanel));

//Function to show panel
function showPanel(){
  //get the next sibling element
  this.classList.toggle('active');
  let nextSibElm = this.nextElementSibling;
  let heightNextSib = nextSibElm.scrollHeight;
  //check if the element has height
  if(nextSibElm.style.maxHeight){
    nextSibElm.style.maxHeight = null;
  } else{
    nextSibElm.style.maxHeight = heightNextSib + 'px';
  }
  //console.log(this);
}})();
