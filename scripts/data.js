'use strict';
export function getProject(projectId) {
  let matchingProject;

  projects.forEach((project) => {
    if (projectId === project.id) {
      matchingProject = project;
    }
  });
  return matchingProject;
}

export const projects = [
  {
    id: '1',
    title: 'Project 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    img: 'project1.jpg',
    link: 'https://example.com/project1',
    text: 'M.V.C Model-View-ControllerModel  Saves and manages the data (cart.js) View = Takes the data and display it on the page (checkout.js) Controller = Run some code when we interact with the pages (eventlistener)'
  },
  {
    id: '2',
    title: 'Project 2',
    description: 'Phasellus non arcu a neque gravida eleifend.',
    img: 'project2.jpg',
    link: 'https://example.com/project2',
    text: "The ultimate measure of man is not where he stands in moments of comfort and convenience but where he stands at times of challenge and controversy"
  },
  {
    id: '3',
    title: 'Project 3',
    description: 'Vestibulum tincidunt est id turpis tincidunt, at consectetur.',
    img: 'project3.jpg',
    link: 'https://example.com/project3',
    text: 'well, i am 3'
  }
  // Add more projects here...
];