let btn = document.querySelector("#btn")
btn.onclick = (evt) => {
    console.log(evt);
    console.log(evt.target);
    console.log(evt.target);
    
}
let div = document.querySelector("div");
div.onmouseover = (e) => {
console.log(e.type);
}