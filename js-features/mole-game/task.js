(() => {
    let deadCount = 0;
    let lostCount = 0;

    function getHole(index) {
        return document.getElementById(`hole${index}`);
    }

    for (let i = 1; i <= 9; i++) {
        let hole = getHole(i);

        hole.onclick = function () {
            if (hole.className.includes('hole_has-mole')) {
                deadCount++;
                document.getElementById('dead').textContent = deadCount;
                if (deadCount === 10) {
                    alert("Победа!");
                    resetGame();
                }
            } else {
                lostCount++;
                document.getElementById('lost').textContent = lostCount;
                if (lostCount === 5) {
                    alert("Вы проиграли!");
                    resetGame();
                }
            }
        };
    }

    function resetGame() {
        deadCount = 0;
        lostCount = 0;
        document.getElementById('dead').textContent = deadCount;
        document.getElementById('lost').textContent = lostCount;
    }
})();