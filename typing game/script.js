document.addEventListener("DOMContentLoaded", function() {
    const mainMenu = document.getElementById("main-menu");
    const gameContainer = document.getElementById("game-container");
    const scoreboard = document.getElementById("scoreboard");
    const startGameButton = document.getElementById("start-game");
    const pauseButton = document.getElementById("pause-button");
    const backMenuButton = document.getElementById("back-menu-button");
    let score = 0;
    let spawnedItems = 0;
    const maxItems = 10;
    let currentInput = "";
    let isGamePaused = false;
    let spawningTimeout;

    startGameButton.addEventListener("click", function() {
        mainMenu.style.display = "none";
        gameContainer.style.display = "block";
        startGame();
    });

    pauseButton.addEventListener("click", function() {
        isGamePaused = !isGamePaused;
        pauseButton.textContent = isGamePaused ? "Resume" : "Pause";
        if (isGamePaused) {
            clearTimeout(spawningTimeout); // Stop spawning new items
        } else {
            spawnItems(); // Resume spawning new items
            document.querySelectorAll('.falling-item').forEach(continueFalling); // Resume falling for existing items
        }
    });

    function continueFalling(item) {
        let posY = parseInt(item.style.top) || 0;
        function fall() {
            if (!isGamePaused) {
                posY += 0.5;
                item.style.top = posY + "px";
                if (posY < window.innerHeight && item.parentElement) {
                    requestAnimationFrame(fall);
                } else {
                    item.remove();
                }
            }
        }
        fall();
    }

    function createFallingItem(text) {
        const item = document.createElement("div");
        item.classList.add("falling-item");
        item.textContent = text;
        item.style.left = Math.random() * 90 + "%";
        gameContainer.appendChild(item);
        continueFalling(item);
    }

    function spawnItems() {
        if (isGamePaused) return; // Stop spawning if game is paused
        if (spawnedItems < maxItems) {
            createFallingItem(spawnedItems % 2 === 0 ? "Eli" : String.fromCharCode(65 + Math.floor(Math.random() * 26)));
            spawnedItems++;
            spawningTimeout = setTimeout(spawnItems, 2000); // Slower spawning rate
        }
    }


    function startGame() {
        resetGame();
        spawnItems();
    }

    function resetGame() {
        const existingItems = document.querySelectorAll('.falling-item');
        existingItems.forEach(item => item.remove());

        isGamePaused = false;
        pauseButton.textContent = "Pause";
        score = 0;
        spawnedItems = 0;
        currentInput = "";
        updateScore(0);
    }
 

    function updateScore(points) {
        score += points;
        scoreboard.textContent = `Score: ${score}`;
    }

    function spawnItems() {
        if (!isGamePaused && spawnedItems < maxItems) {
            createFallingItem(spawnedItems % 2 === 0 ? "Eli" : String.fromCharCode(65 + Math.floor(Math.random() * 26)));
            spawnedItems++;
            spawningTimeout = setTimeout(spawnItems, 2000);
        }
    }

    document.addEventListener("keydown", (e) => {
        if (e.key.length === 1 && /[a-zA-Z]/.test(e.key)) {
            currentInput += e.key.toLowerCase();
            const fallingItems = document.querySelectorAll('.falling-item');

            if (fallingItems.length > 0) {
                const targetItem = Array.from(fallingItems).reduce((lowest, item) => {
                    return (lowest.offsetTop < item.offsetTop) ? item : lowest;
                }, fallingItems[0]);

                if (targetItem.textContent.toLowerCase().startsWith(currentInput)) {
                    targetItem.style.color = "red";
                    if (targetItem.textContent.toLowerCase() === currentInput) {
                        targetItem.remove();
                        updateScore(10);
                        currentInput = "";
                    }
                } else {
                    currentInput = "";
                    targetItem.style.color = "black";
                }
            }
        }
    });
});