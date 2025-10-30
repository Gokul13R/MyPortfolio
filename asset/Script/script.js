let menuIcon = document.querySelector('.menu-icon')
let navber = document.querySelector('.navbar')

menuIcon.onclick=()=>{
  navber.classList.toggle('active');
}


function showProject(projectId) {
  const projects = document.querySelectorAll('.project-content');
  projects.forEach(project => project.classList.remove('active'));

  const selected = document.getElementById(projectId);
  selected.classList.add('active');
}
