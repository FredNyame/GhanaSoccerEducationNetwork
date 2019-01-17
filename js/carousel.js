//get all items
const wrapper = document.querySelector(".slide-wrap");
const allCards = document.querySelectorAll(".words");
const size =  allCards[0].clientWidth;

//button to click
//addeventlisteners
document.querySelector("a.prev").addEventListener('click', function(){
  //wrapper.style.transition = 'transition 0.5s ease-in-out';
  slideIndexFun(-1);
});
document.querySelector("a.next").addEventListener('click', function(){
  //wrapper.style.transition = 'transition 0.5s ease-in-out';
  slideIndexFun(1);
});

//Keep track of the current Index
let sliderIndex = 1;
sliderFun(sliderIndex);

function slideIndexFun(n){
  sliderFun(sliderIndex += n);
}

//Show one card 
//wrapper.style.transform = 'translateX(' + (-size * sliderIndex) + 'px';

//Display and control function
function sliderFun(numIndex){
  if (numIndex > allCards.length) {sliderIndex = 1}    
  if (numIndex < 1) {sliderIndex = allCards.length}
  for (let i = 0; i < allCards.length; i++) {
    allCards[i].style.display = "none";  
  }
  
  allCards[sliderIndex-1].style.display = "block";  
}

//functiion 
/*  wrapper.addEventListener('transitionend', () => {
  //stop the transition
  if(sliderIndex > allCards.length){
    wrapper.style.transition = 'none';
    sliderIndex = 1;
    wrapper.style.transform = 'translateX(' + (-size * sliderIndex) + 'px';
 }
  if(sliderIndex < 1){
     wrapper.style.transition = 'none';
     sliderIndex = allCards.length - 1;
     wrapper.style.transform = 'translateX(' + (-size * sliderIndex) + 'px';
  }
})  */