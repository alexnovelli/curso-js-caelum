console.log("=== EVENTS ===");

let page = document.querySelector("body");

page.addEventListener("click", function(e){
    console.log(arguments, e);
    page.classList.add("red-theme");
});