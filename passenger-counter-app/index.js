

let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("saved-el")
let count = 0
console.log(count)

console.log(saveEl)

//function increment
function increment() {
    count = count + 1
    countEl.innerText = count
}



function save(){
    let savedVal = count
    count = 0
    countEl.innerText = count
    saveEl.innerText += savedVal + "-"
}

