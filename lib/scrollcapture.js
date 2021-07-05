const h = document.getElementById("header");
const b = document.getElementById("border");
const s = document.getElementById("subtitle");

shrunk = false;

window.onscroll = () => {
    if (window.pageYOffset > 0) {
        h.classList.remove("enlarged");
        h.classList.add("shrunk");

        b.classList.remove("border-enlarged");
        b.classList.add("border-shrunk");

        s.classList.remove("visible");
        s.classList.add("invisible");
        shrunk = true;
    } else if (shrunk == true) {
        h.classList.remove("shrunk");
        h.classList.add("enlarged");

        b.classList.remove("border-shrunk");
        b.classList.add("border-enlarged");

        s.classList.remove("invisible");
        s.classList.add("visible");
        shrunk = false;
    }
}

const entryObserver = new IntersectionObserver(anchor => {
    if (anchor.isIntersecting === true) {
        console.log("hello there");
        elements = document.getElementsByClassName("drop-in");
        i = 0;
        const interval = setInterval(() => {
            if (i == elements.length-1) {
                clearInterval(interval);
            }
            elements[i].classList.add("dropped");
            i++;
        }, 200);
    }
}, { threshold: 1.0 });

entryObserver.observe(document.querySelector("[anchor='about']"));