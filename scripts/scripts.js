// Responsive Menu Toggle
document.getElementById("menu-toggle").addEventListener("click", function () {
    const menu = document.getElementById("menu");
    menu.classList.toggle("hidden");
  });
  
  // Dynamic Footer
  const currentYear = new Date().getFullYear();
  document.getElementById("current-year").textContent = currentYear;
  
  const lastModified = new Date(document.lastModified).toLocaleDateString();
  document.getElementById("last-modified").textContent = lastModified;
  