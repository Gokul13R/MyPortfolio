let menuIcon = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  navbar.classList.toggle("active");
};

// close navbar when clicking outside
document.addEventListener("click", (e) => {
  if (!navbar.contains(e.target) && !menuIcon.contains(e.target)) {
    navbar.classList.remove("active");
  }
});

function showProject(projectId) {
  const projects = document.querySelectorAll(".project-content");
  projects.forEach((project) => project.classList.remove("active"));

  const selected = document.getElementById(projectId);
  selected.classList.add("active");
}

document.querySelectorAll(".image-slider").forEach((slider) => {
  const img = slider.querySelector("img");
  const prev = slider.querySelector(".prev-img");
  const next = slider.querySelector(".next-img");

  const images = JSON.parse(slider.getAttribute("data-images"));
  let index = 0;

  prev.addEventListener("click", () => {
    index = (index - 1 + images.length) % images.length;
    img.src = images[index];
  });

  next.addEventListener("click", () => {
    index = (index + 1) % images.length;
    img.src = images[index];
  });
});
