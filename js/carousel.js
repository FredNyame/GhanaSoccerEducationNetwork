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
let sliderIndex = 0;
sliderFun(sliderIndex);

function slideIndexFun(n){
  sliderFun(sliderIndex += n);
}

//Show one card 
//wrapper.style.transform = 'translateX(' + (-size * sliderIndex) + 'px';

//Display and control function
function sliderFun(numIndex){
  //wrapper.style.transition = 'transition 0.5s ease-in-out';
  if(numIndex > allCards.length - 1) {
    document.querySelector("a.next").style.opacity = '0';
    return
  };
  if(numIndex < 0) {
    document.querySelector("a.prev").style.opacity = '0';
    return
  };
  for(let i = 0; i < allCards.length; i++){
    allCards[i].style.transform = 'translateX(' + (-size * numIndex) + 'px';
  }
  document.querySelector("a.prev").style.opacity = '1';
  document.querySelector("a.next").style.opacity = '1';
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