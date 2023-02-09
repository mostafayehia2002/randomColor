
let container = document.querySelector(".container");
let btn = document.querySelector(".btn");
let box;
let text;
//function to refresh page
btn.onclick = () => {
    container.innerHTML = "";
    createBox();
}

createBox();

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
    //select All text code 
    text = document.querySelectorAll(".container .box .text");
    //call function copyCode
    copyCode();
}
//function to copy hexaDesimal code of color
function copyCode() {
    document.addEventListener("click", (e) => {
        if (e.target.classList.contains("color")) {
            navigator.clipboard.writeText(e.target.nextElementSibling.innerHTML);
            let code=e.target.nextElementSibling.innerHTML;
            e.target.nextElementSibling.innerHTML="copied";
           setTimeout(()=>{
            e.target.nextElementSibling.innerHTML=code;
           },1000)
        }
    })
}