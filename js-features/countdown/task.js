let time = 59;
const timer = setInterval(() => {
    if (time >= 0) {
        document.getElementById("timer").textContent = time--;
    } else {
        alert("Вы победили в конкурсе!");
        clearInterval(timer);
    }
}, 1000);
