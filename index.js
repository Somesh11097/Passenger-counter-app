// document.getElementById("count-el").innerText=5;




let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0


function increment(){

   count +=1;
   countEl.innerText = count

}

function save(){
    let countStr = count + " - "
    saveEl.innerText += countStr
    
    
}










// let welcomeEl = document.getElementById("welcome-el")

// let name = " Somesh Banerjee"
// let greeting = "Welcome back!!!"

// welcomeEl.innerText = greeting + name;













