let click = 0;
const image = document.getElementById("cookie");

function clicker() {
    document.getElementById("clicker__counter").textContent = click++;
    image.width = 250;
    image.height = 170;
    setTimeout(() => {
        image.width = 200;
        image.height = 128;
    }, 500);
};

image.onclick = clicker;