const intro = "lost in space.";

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
}

setTimeout(() => {
    typeIntro();
}, 2000);
