document.addEventListener("DOMContentLoaded", function () {
  const upanddown = document.getElementById("upanddown");
  const duration = 9000;
  function startBounceAnimation() {
    upanddown.classList.add("bounce");
    setTimeout(function () {
      upanddown.classList.remove("bounce");
    }, duration);
  }
  upanddown.addEventListener("click", startBounceAnimation);
});
