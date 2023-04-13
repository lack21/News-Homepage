// lear
// News Homepage

window.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelector(".links");
  const linksBtn = document.querySelector(".links-btn");

  linksBtn.addEventListener("click", () => {
    links.classList.toggle("active");
    linksBtn.src =
      linksBtn.src.slice(linksBtn.src.length - 8, linksBtn.src.length - 4) ==
      "menu"
        ? "assets/icon-menu-close.svg"
        : "assets/icon-menu.svg";
  });
});
