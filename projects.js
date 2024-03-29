import { projectsData } from "./data/projectsData.js";
const section = document.querySelector(".projects");
const project = () => {
  for (let i = 0; i < projectsData.length; i++) {
    const data = projectsData[i];

    const Mesprojects = document.querySelector(".container_project");
    const divProjects = document.createElement("div");
    divProjects.className = "allprojects modal-toggle";

    const displayInfos = document.createElement("span");
     const displayAllP = document.createElement("div");

     // Gestion du projet 
    divProjects.innerHTML = `
    
    <span class="infos_display">
      <h3> ${data.title}</h3>
      <p>
      ${data.infos}
      </p>
    </span>
    <img src="${data.img}" alt=${data.title}/>


    `;

    Mesprojects.appendChild(divProjects);
    section.appendChild(Mesprojects);
    
    displayInfos.className = "infos_display";
  }

  const allProjects = document.querySelectorAll(".allprojects");
  allProjects.forEach((project, index) => {
    project.addEventListener("click", () => {
      const selectedProject = projectsData[index];
      displayModal(selectedProject);
    });
  });
};

// Modal
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
        <img src='${image}' alt = '${projectData.title}' />
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
        ${projectData.languages
          .map((cmp) => {
            return `<li>${cmp}</li>`;
          })
          .join("")}
        </ul>
      </div>
      </div>
      <div>
       ${

        projectData.link ? `  <button><a href=${projectData.link} target='blank'>Voir le site</a></button>` : ""
       }
      <button><a href=${projectData.code} target="_blank">Voir le code</a></button>
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


