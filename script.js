const themeToggleBtn = document.querySelector(".theme-toggler");
const themeIcon = document.getElementById("toggle-icon");
const projectsUl = document.getElementById("projects-list");
const counter = document.querySelector('.counter');

// fetch and display projects
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const projects = data
      .sort((a, b) => a.title.localeCompare(b.title))
      .map(
        (project) => `
            <li class="project-card">
                <img src="${project.img}" alt="${project.title}" />
                <div class="card-description">
                    <h2 class="title">${project.title}</h2>
                    <ul class="technologies">
                        ${project.technologies
                          .map((tech) => `<li>${tech}</li>`)
                          .join("")}
                    </ul>
                    <p class="description">${project.description}</p>
                    <div class="redirect">
                        <a href="${
                          project.challenge_link
                        }" class="challenge">Challenge</a>
                        <a href="${project.demo_link}" class="Live">Live</a>
                        <a href="${project.code_link}" class="code">Code</a>
                    </div>
                </div>
            </li>
        `
      )
      .join("");
    projectsUl.innerHTML = projects;
    const totalSolution = data.length
    counter.innerHTML =   `Completed (${totalSolution})`
  })
  .catch((error) => console.error(error));

// theme switcher
const changeTheme = (e) => {
  const projectCards = document.querySelectorAll(".project-card");
  if (themeIcon.src.includes("light")) {
    themeIcon.src = "src/assets/icons/theme_dark.png";
    document.body.style.backgroundColor = "#141414";
    document.body.style.color = "white";
    projectCards.forEach((projectCard) => {
      projectCard.style.backgroundColor = "#1e1e1e";
    });
  } else {
    themeIcon.src = "src/assets/icons/theme_light.png";
    document.body.style.backgroundColor = "#f5f4fe";
    document.body.style.color = "black";
    projectCards.forEach((projectCard) => {
      projectCard.style.backgroundColor = "white";
    });
  }
};
themeToggleBtn.addEventListener("click", changeTheme);
