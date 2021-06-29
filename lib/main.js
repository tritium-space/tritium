const overlay = document.getElementById("overlay");
const body = document.getElementById("body");

const intro = "so who are we?";
const outro = "scroll down to find out";

function typeIntro() {
    const introBar = document.getElementById("bar");
    let i = 0;
    let interval = setInterval(() => {
        e = document.createElement("span");
        e.append(document.createTextNode(intro[i]));
        e.setAttribute("id", `digit_${i}`);
        introBar.appendChild(e);
        if (i == intro.length - 1) {
            clearInterval(interval);
        }
        i++;
    }, 100);
    setTimeout(() => {
        i = 0;
        interval = setInterval(() => {
            try {
                e = document.getElementById(`digit_${i}`).remove();
            } catch(e) {}
            e = document.createElement("span");
            e.append(document.createTextNode(outro[i]));
            e.setAttribute("id", `digit_${i}`);
            introBar.appendChild(e);
            if (i == outro.length - 1) {
                clearInterval(interval);
            }
            i++;
        }, 100);
    }, 2000);
}

setTimeout(() => {
    overlay.classList.add("overlay-vanish");
    body.classList.remove("no-overflow");
    setTimeout(() => {
        overlay.remove();
        typeIntro();
    }, 2000);
}, 2000);
