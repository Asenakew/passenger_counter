//document.getElementById("count-el").innreText = 5;
//initianlize a count as 0
// listen for click in the increment button
// change the count-el in html to reflect  the new count
let count = 0;
let saveEl = document.getElementById("save-el");  
let countEl = document.getElementById("count-el");

function increment(){
    count += 1;
    countEl.textContent = count;
   
   
    
}
function save(){
   let countStr = count + "-";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
    countEl.textContent.object.style.overflow ="hidden";
   
  
}
save();
