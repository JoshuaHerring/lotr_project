let width = screen.width;

if(width <= 375){
    let before = document.querySelector(".logo");
    let menuX = document.createElement("a");
    menuX.innerHTML = "&#10005;"
    list.insertBefore(before, list.children[0]);
}