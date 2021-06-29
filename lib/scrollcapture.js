const h = document.getElementById("header");
const b = document.getElementById("border");
const s = document.getElementById("subtitle");

window.onscroll = () => {
    if (window.pageYOffset > 0) {
        h.classList.remove("enlarged");
        h.classList.add("shrunk");

        b.classList.remove("border-enlarged");
        b.classList.add("border-shrunk");

        s.classList.remove("visible");
        s.classList.add("invisible");
    } else {
        h.classList.remove("shrunk");
        h.classList.add("enlarged");

        b.classList.remove("border-shrunk");
        b.classList.add("border-enlarged");

        s.classList.remove("invisible");
        s.classList.add("visible");
    }
}