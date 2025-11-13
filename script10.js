// Simple script to show alert when user clicks any nav link
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    alert(`You clicked on ${link.textContent} section!`);
  });
});
