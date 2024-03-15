import { projectsData } from "./data/projectsData.js";
const section = document.querySelector(".projects");
const project = () => {
  for (let i = 0; i < projectsData.length; i++) {
    const data = projectsData[i];

    const Mesprojects = document.querySelector(".container_project");
    const divProjects = document.createElement("div");
    divProjects.className = "allprojects modal-toggle";

    divProjects.innerHTML = `
      <h3>${data.title}</h3>
      <div><img src="${data.img}"/></div>
    `;

    Mesprojects.appendChild(divProjects);
    section.appendChild(Mesprojects);
  }

  const allProjects = document.querySelectorAll(".allprojects");
  allProjects.forEach((project, index) => {
    project.addEventListener("click", () => {
      const selectedProject = projectsData[index];
      displayModal(selectedProject);
    });
  });
};

const displayModal = (projectData) => {
  const modal = document.createElement("div");
  modal.className = "modal";
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close">&times;</span>
      <div class="img-modal">
      ${projectData.images
      .map(
        (image) =>
          `
         <img src='${image}' alt = ""
         <img src="${image}" alt = "project image" />
         `
      )
      .join("")}


      </div>
       <div class="modal-info"> 
       <div class="infos">
       <p>${projectData.infos}</p>
       </div>
      <div class="modal-competences">
         <ul>
        ${
          projectData.competences.map((cmp) => {
        return `<li>${cmp}</li>`;
      }).join("")}
        </ul>
      </div>

          
      </div>
      <div>
      <button><a href=${projectData.link} target='blank'>Voir le site</a></button>
      <button><a href="">Voir le code</a></button>
      </div>

    </div>
  `;
  section.appendChild(modal);

  const closeModal = document.querySelector(".close");
  closeModal.addEventListener("click", () => {
    section.removeChild(modal);
  });
};

project();

// ${
//   projectData.images
//     ? `
//         <img src="${projectData.images[0]}" alt="project image" />
//         <img src="${projectData.images[1]}" alt="project image" />
//    `
//     : ""
// }
