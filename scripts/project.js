'use strict';
import { projects, getProject } from "./data.js";

const projectCon = document.querySelector('#project .con');
export function renderProject() {
  let projectHTML = '';
  projects.forEach((project) => {
    projectHTML += `
    <div data-project-id="${project.id}" class="card">
    <h2>${project.title}</h2>
    <p>${project.description}.</p>
    </div>`;
  });
  projectCon.innerHTML = projectHTML;
}

// renderProject();
const projectInfoCon = document.querySelector('#project .info-con');
const projectIcon = document.querySelector('#project .lni-xmark');

const projectText = document.querySelector('#project .text');
const header = document.querySelector('header');

document.querySelectorAll('.card').forEach((card) => {
  card.addEventListener('click', () => {
    header.style.top = '-100px';
    document.body.style.overflowY = 'hidden';

    const { projectId } = card.dataset;
    projectInfoCon.classList.add('show-info');
    const matchingProject = getProject(projectId);
    // projectText.innerHTML = matchingProject.text;
    

  });
})
projectIcon.addEventListener('click', () => {
  projectInfoCon.classList.remove('show-info');
  document.body.style.overflowY = 'scroll';
});