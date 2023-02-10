
let container = document.querySelector(".container");
let btn = document.querySelector(".btn");
let box;
let text;
//function to refresh page
btn.onclick = () => {
   window.location.reload();  
}
window.onload=()=>{
    createBox();
}

function createBox() {
    let randomHexaDecimal;
    for (let i = 0; i < 30; i++) {
        randomHexaDecimal = Math.floor(Math.random() * 0x1000000).toString(16);
        container.innerHTML += `<div class="box">
    <div class="color"></div>
    <p class="text">#${randomHexaDecimal}</p>
</div>`;
        box = document.querySelectorAll(".container .box .color");
        box[i].style.backgroundColor = `#${randomHexaDecimal}`;
    }
    // //select All text code 
    // text = document.querySelectorAll(".container .box .text");
    //call function copyCode
    copyCode();
}
//function to copy hexaDesimal code of color
function copyCode() {
    let code;
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("color")) {

            navigator.clipboard.writeText(e.target.nextElementSibling.innerHTML);

            code=e.target.nextElementSibling.innerHTML;

            e.target.nextElementSibling.innerHTML="copied";

        setTimeout(()=>{

            e.target.nextElementSibling.innerHTML=code;

           },500);
         
        }
    })
}