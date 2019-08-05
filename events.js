console.log("=== EVENTS ===");

let page = document.querySelector("body");

window.addEventListener("mouseout", function(e){
    page.classList.add("red-theme");
});
window.addEventListener("mouseover", function(e){
    page.classList.remove("red-theme");
});