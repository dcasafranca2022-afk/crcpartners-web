document.addEventListener("DOMContentLoaded", () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".menu");

  if (toggle && menu) {
    toggle.addEventListener("click", () => {
      menu.style.display = menu.style.display === "flex" ? "none" : "flex";
      menu.style.position = "absolute";
      menu.style.top = "92px";
      menu.style.left = "0";
      menu.style.right = "0";
      menu.style.background = "#ffffff";
      menu.style.padding = "20px 5%";
      menu.style.flexDirection = "column";
      menu.style.boxShadow = "0 12px 24px rgba(8,36,69,.12)";
    });
  }
});
