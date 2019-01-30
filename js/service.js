( function () {let colMain = document.querySelector('.col-row');
colMain.addEventListener('click', serviceDesc, true);
  
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
}})();