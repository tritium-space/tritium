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

var observer = new IntersectionObserver(function (entries) {
    if (entries[0].isIntersecting === true) {
        elements = document.getElementsByClassName("a");
        i = 0;
        const interval = setInterval(() => {
            if (i == elements.length-1) {
                clearInterval(interval);
            }
            elements[i].classList.add("test-visible");
            i++;
        }, 200);
    }
}, { threshold: [0] });

observer.observe(document.querySelector("#test"));
