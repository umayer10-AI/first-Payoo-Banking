let button = document.querySelector("#all");
let parent = document.querySelectorAll(".parent");

button.addEventListener("click",(e) => {
    let a = e.target.closest(".parent-card");
    if(!a) return;

    let id = a.dataset.target;

    parent.forEach(v => {
        v.classList.add("hidden");
    })

    let c = document.getElementById(id);
    c.classList.remove("hidden");
});

let l = document.querySelector("#logout");
l.addEventListener("click",() => {
    window.location.assign("index.html");
})
