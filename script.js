const button = document.querySelector("button");
const colors = ["#FFB996", "#FFCF81", "#E0AED0", "#51829B"];
let i = 0;

button.addEventListener("click", changeColor);
function changeColor() {   
    document.body.style.background = colors[i];
    i++;
    if (i > colors.length) {
        i = 0
    }
}