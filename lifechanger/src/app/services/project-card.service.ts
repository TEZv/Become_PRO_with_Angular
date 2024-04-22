import { Injectable } from '@angular/core';
import { ProjectCardsInfo } from '../models/project-card';

@Injectable({
  providedIn: 'root',
})
export class ProjectCardsService {
  GetProjectCardsInfos(): ProjectCardsInfo[] {
    return [
      {
        image: {
          path: '../../assets/projects/ua-delivery-project.png',
          darkModePath: '../../assets/dark-mode/ua-delivery-project-dark-mode.png',
          alt: 'Image of UA delivery project',
        },
        title: 'UA-delivery',
        description:
          'A web app for UA-Delivery food-delivery service. The app reads a list of meals from a Realtime Firebase Database. \
      The user can add items to the shopping cart, collects information for the order and sends it back to the Firebase Database.',
        techStack: [
          ' HTML',
          ' Tailwind CSS',
          ' Javascript',
          ' React.js',
          ' Google Firebase',
          ' npm',
        ],
        previewLiveLink: 'https://ua-delivery.vercel.app/',
        githubCodeLink: 'https://github.com/TEZv/UA-delivery',
      },
      {
        image: {
          path: '../../assets/projects/qalight-project.png',
          darkModePath: '../../assets/dark-mode/qalight-project-dark-mode.png',
          alt: 'Image of QALight project',
        },
        title: 'QALight',
        description:
          "The part of a QALight's course workout. The implementations that the website has include: \
      database js, the shopping cart page and logic, the product structure and the footer rendering from js, the form with input fields.",
        techStack: [' HTML', ' CSS', ' Javascript'],
        previewLiveLink: 'https://tezv.github.io/index.html',
        githubCodeLink: 'https://github.com/TEZv/TEZv.github.io',
      },
      {
        image: {
          path: '../../assets/projects/lifechanger-project.png',
          darkModePath: '../../assets/dark-mode/lifechanger-project-dark-mode.png',
          alt: 'Image of Lifechanger project',
        },
        title: 'Lifechanger',
        description:
          "The part of a Lifechanger's course workout. The implementations that the website has include: \
      darkMode, toggle button, images replacement, @media {}. The template for the practice can be found directly on Github.",
        techStack: [' HTML', ' CSS', ' Javascript'],
        previewLiveLink: 'https://lifechanger-portfolio-task3.netlify.app/',
        githubCodeLink:
          'https://github.com/TEZv/Lifechanger/tree/main/portfolio_darkmode',
      },
      {
        image: {
          path: '../../assets/projects/etch-a-sketch-project.png',
          darkModePath: '../../assets/dark-mode/etch-a-sketch-project-dark-mode.png',
          alt: 'Image of Etch-a-Sketch project',
        },
        title: 'Etch-a-Sketch',
        description:
          "The part of a The Odin Project (TOP)'s course workout. The implementations that the website has include: \
      grid creation and implementation via js, DOM manipulation, Event handlers.",
        techStack: [' HTML', ' Native CSS', ' Javascript'],
        previewLiveLink: 'https://tezv-etch-a-sketch.netlify.app/',
        githubCodeLink:
          'https://github.com/TEZv/TheOdinProjects/tree/main/Etch-a-Sketch',
      },
      {
        image: {
          path: '../../assets/projects/tic-tac-toe-project.png',
          darkModePath: '../../assets/dark-mode/tic-tac-toe-project-dark-mode.png',
          alt: 'Image of Tic Tac Toe project',
        },
        title: 'Tic Tac Toe',
        description:
          "The part of a The Odin Project (TOP)'s course workout. The implementations that the website has include: \
          IIFEs, Factory Functions, Module Design Pattern, Minimax AI algorithm, DOM manipulation, Event handlers.",
        techStack: [' HTML', ' Native CSS', ' Javascript'],
        previewLiveLink: 'https://tezv-t3-tic-tac-toe.netlify.app/',
        githubCodeLink:
          'https://github.com/TEZv/TheOdinProjects/tree/main/Tic-Tac-Toe',
      },
      {
        image: {
          path: '../../assets/projects/quote-machine-project.png',
          darkModePath: '../../assets/dark-mode/quote-machine-project-dark-mode.png',
          alt: 'Image of Quote Machine project',
        },
        title: 'Quote Machine',
        description:
          "The part of a freeCodeCamp (fCC)'s course workout. The implementations that the website has include: \
        Arrays, Factory Functions, Module Design Pattern, DOM manipulation, Math.random().",
        techStack: [' HTML', ' CSS', ' Javascript'],
        previewLiveLink: 'https://tezv-quote-machine.netlify.app/',
        githubCodeLink:
          'https://github.com/TEZv/freeCodeCamp-Projects/tree/main/frontEndCertificate/quoteMachine',
      },
    ];
  }
}
