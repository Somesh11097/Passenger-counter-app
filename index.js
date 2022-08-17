// document.getElementById("count-el").innerText=5;




let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0


function increment(){

   count +=1;
   countEl.textContent = count

}

//textContext is also an alternative of innertext.html
function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr
    countEl.textContent = 0;
    count = 0;
    
    
}










// let welcomeEl = document.getElementById("welcome-el")

// let name = " Somesh Banerjee"
// let greeting = "Welcome back!!!"

// welcomeEl.innerText = greeting + name;













