document.addEventListener("DOMContentLoaded", () => {
    const yearSpan = document.getElementById("year");
    const lastModifiedSpan = document.getElementById("last-modified");

    // Set copyright year
    yearSpan.textContent = new Date().getFullYear();

    // Set last modified date
    lastModifiedSpan.textContent = document.lastModified;

    // Hamburger menu toggle
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector("nav ul");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("visible");
        hamburger.textContent = navMenu.classList.contains("visible") ? "✖" : "☰";
    });
});
