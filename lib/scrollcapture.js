const h = document.getElementById("header");
const t = document.getElementById("title");
const s = document.getElementById("subtitle");

window.onscroll = () => {
    if (window.pageYOffset > 0) {
        h.classList.remove("enlarged");
        h.classList.add("shrunk");

        t.classList.remove("title-enlarged");
        t.classList.add("title-shrunk");

        s.classList.remove("visible");
        s.classList.add("invisible");
    } else {
        h.classList.remove("shrunk");
        h.classList.add("enlarged");

        t.classList.remove("title-shrunk");
        t.classList.add("title-enlarged");

        s.classList.remove("invisible");
        s.classList.add("visible");
    }
}