let positive = document.querySelector("#increase");
let negative = document.querySelector("#decrease");
let countText = document.querySelector("#heading");
let themeBtn = document.querySelector("#theme");
let background = document.querySelector(".box")
let count = 0;
const algorithm = function (operator){
    if(operator ==="+"){
        count++;
        countText.innerText = count;
    }
    else if(operator === "-" && count >0){
        count--;
        countText.innerText = count;
    }
}
positive.addEventListener("click", ()=>{algorithm("+")});
negative.addEventListener("click", ()=>{algorithm("-")});

themeBtn.addEventListener("click",()=>{
    background.classList.toggle("dark");
});