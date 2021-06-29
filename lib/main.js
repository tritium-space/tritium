const overlay = document.getElementById("overlay");
const body = document.getElementById("body");

const intro = "so who are we?";

function typeIntro() {
    const introBar = document.getElementById("bar");
    i = 0;
    interval = setInterval(() => {
        e = document.createElement("span");
        e.append(document.createTextNode(intro[i]));
        introBar.appendChild(e);
        if (i == intro.length-1) {
            clearInterval(interval);
        }
        i++;
    }, 100);
}

setTimeout(() => {
    overlay.classList.add("overlay-vanish");
    body.classList.remove("no-overflow");
    setTimeout(() => {
        overlay.remove();
        typeIntro();
    }, 2000);
}, 2000);
