let score = 0;

function spawnYarn() {
    const yarn = document.createElement("div");
    yarn.className = "yarn";

    yarn.style.left = Math.random() * 300 + "px";
    yarn.style.top = Math.random() * 300 + "px";

    yarn.onclick = (event) => {
        score++;
        document.getElementById("score").textContent = "Score: " + score;
        
        // sparkle burst (5 sparkles)
        for (let i = 0; i < 5; i++) {
            createSparkle(
                event.clientX - game.offsetLeft + (Math.random() * 20 - 10),
                event.clientY - game.offsetTop + (Math.random() * 20 - 10)
            );
        }
     
        yarn.classList.add("pop");
        setTimeout(() => yarn.remove(), 200);
    };

    if (score >= 50) {
        document.getElementById("game").innerHTML = `
         <div class="win-message">
          Congrats! You collected all the yarn :)<br>
          Thank you for helping Meowoshka ^_^
        `;
    }

    document.getElementById("game").appendChild(yarn);

    setTimeout(() => yarn.remove(), 1000);
}

setInterval(spawnYarn, 800);

function createSparkle(x, y) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = x + "px";
    sparkle.style.top = y + "px";
    document.getElementById("game").appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 500);

}