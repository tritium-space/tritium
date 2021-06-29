const atom = document.getElementById("atom");
const overlay = document.getElementById("overlay");

setTimeout(() => {
    atom.classList.add("atom-hidden");
    setTimeout(() => {
        atom.remove();
        setTimeout(() => {

        }, 100);
    }, 1200);
}, 1234);
