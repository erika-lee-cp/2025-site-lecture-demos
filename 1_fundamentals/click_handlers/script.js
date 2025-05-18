let sunButton = document.querySelector("#sun-btn");
let moonButton = document.querySelector("#moon-btn");

const setSun = () => {
    let header = document.querySelector('h1'); 
    header.textContent = "☀️";
}
const setMoon = () => {
    let header = document.querySelector('h1'); 
    header.textContent = "🌑";
}

sunButton.addEventListener("click", setSun);
moonButton.addEventListener("click", setMoon);
