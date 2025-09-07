/* ===============================
   Royal Birthday Celebration - JS
   Cleaned & fully functional
   =============================== */

// Elements
const entrance = document.getElementById("entrance");
const curtains = document.getElementById("curtains");
const door = document.getElementById("door");
const headline = document.getElementById("headline");
const confettiRoot = document.getElementById("confetti-root");
const musicControl = document.getElementById("musicControl");
const bgMusic = document.getElementById("bgMusic");
const cards = document.querySelectorAll(".card");

// State
let musicPlaying = false;

/* -------- Entrance Logic -------- */
door.addEventListener("click", () => {
  // Open curtains + door
  curtains.classList.add("open");
  door.classList.add("open");

  // After animation, reveal celebration
  setTimeout(() => {
    entrance.style.display = "none";
    headline.classList.add("visible");
    startConfetti(300);
    startSparkles(10_000);
  }, 2200);
});

/* -------- Confetti Effect -------- */
function startConfetti(count = 200) {
  for (let i = 0; i < count; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("sparkle");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = 2 + Math.random() * 3 + "s";
    confetti.style.animationDelay = Math.random() * 2 + "s";
    confettiRoot.appendChild(confetti);

    confetti.addEventListener("animationend", () => {
      confetti.remove();
    });
  }
}

/* -------- Sparkles (extra) -------- */
function startSparkles(duration = 5000) {
  const interval = setInterval(() => {
    const spark = document.createElement("div");
    spark.classList.add("sparkle");
    spark.style.left = Math.random() * 100 + "vw";
    spark.style.animationDuration = 3 + Math.random() * 2 + "s";
    confettiRoot.appendChild(spark);

    spark.addEventListener("animationend", () => {
      spark.remove();
    });
  }, 150);

  setTimeout(() => clearInterval(interval), duration);
}

/* -------- Music Control -------- */
musicControl.addEventListener("click", () => {
  if (!musicPlaying) {
    bgMusic.volume = 0.6;
    bgMusic.play();
    musicPlaying = true;
    musicControl.style.boxShadow = "0 0 15px lime";
  } else {
    bgMusic.pause();
    musicPlaying = false;
    musicControl.style.boxShadow = "0 0 10px var(--gold)";
  }
});

/* -------- Gallery Blur & Flip -------- */
cards.forEach((card) => {
  // Initially blur all cards
  card.classList.add("muted");

  card.addEventListener("click", () => {
    // Clear blur on clicked card
    cards.forEach((c) => {
      if (c === card) {
        c.classList.remove("muted");  // unblur clicked card
        c.classList.toggle("flipped"); // flip clicked card
      } else {
        c.classList.add("muted");      // blur all others
        c.classList.remove("flipped"); // reset flip of others
      }
    });
  });
});

