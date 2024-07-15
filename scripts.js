function toggleMenu() {
  const container = document.getElementById("container");
  const overlay = document.getElementById("overlay");
  container.classList.toggle("open");
  overlay.classList.toggle("show");
}

function checkWindowSize() {
  const container = document.getElementById("container");
  const overlay = document.getElementById("overlay");
  if (window.innerWidth > 768) {
    container.classList.remove("open");
    overlay.classList.remove("show");
  }
}

window.addEventListener("resize", checkWindowSize);
window.addEventListener("load", checkWindowSize);
