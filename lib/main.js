scrollerOverlayItems = Array.from(document.getElementsByClassName("link"))

const options = {
    root: document.getElementsByClassName("content")[0],
    rootMargin: '0px',
    threshold: 0.5
}

let observer = new IntersectionObserver(function (entries) {
    scrollerOverlayItems.forEach(
        item => {
            item.classList.remove("active-section")
        }
    );

    entries.forEach(
        entry => {
            if (entry.isIntersecting) {
                document.querySelector("[data-js='" + entry.target.id + "']").classList.add("active-section");
                document.querySelector(`[data-js='mobile-${entry.target.id}']`).classList.add("active-selection");
            }
        }
    );
}, options);
let targets = Array.from(document.getElementsByClassName("slide"));
targets.forEach(element => {
    observer.observe(element);
});

function delve(name) {
    window.location.href = `${name}.html`;
}
