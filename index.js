function toggleDescription(day) {
    let desc = document.getElementById(`${day}-desc`);
    document.querySelectorAll('.desc').forEach(element => {
        if (element !== desc) element.style.display = "none";
    });
    desc.style.display = desc.style.display === "block" ? "none" : "block";
    playMusic();
}

function toggleMusic() {
    let audio = document.getElementById("loveSong");
    audio.paused ? audio.play() : audio.pause();
}

function playMusic() {
    let audio = document.getElementById("loveSong");
    if (audio.paused) audio.play();
}

// Firecracker Animation
function createFirecracker() {
    let container = document.getElementById("fireworks-container");
    let firecracker = document.createElement("div");
    
    firecracker.className = "firecracker";
    firecracker.style.left = `${Math.random() * 90}%`;

    container.appendChild(firecracker);

    setTimeout(() => {
        createExplosion(firecracker.style.left);
        firecracker.remove();
    }, 2000);
}

// Explosion Effect
function createExplosion(position) {
    let container = document.getElementById("fireworks-container");
    let explosion = document.createElement("div");
    explosion.className = "explosion";
    explosion.style.left = position;
    explosion.style.top = `${Math.random() * 50 + 30}%`;
    explosion.innerText = getRandomLoveQuote();

    container.appendChild(explosion);

    setTimeout(() => explosion.remove(), 1000);
}

// Random Love Quotes
function getRandomLoveQuote() {
    let quotes = [
        "You are my sunshine ☀️",
        "I love you to the moon & back 🌙",
        "You make my heart smile 😊",
        "Forever & always ❤️",
        "My love for you is endless ♾️",
        "Every love story is beautiful, but ours is my favorite 📖💖"
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
}

// Trigger firecrackers every 3 seconds
setInterval(createFirecracker, 3000);