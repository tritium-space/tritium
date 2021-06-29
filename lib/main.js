const overlay = document.getElementById("overlay");
const body = document.getElementById("body");

setTimeout(() => {
    overlay.classList.add("overlay-vanish");
    body.classList.remove("no-overflow");
}, 2000);
