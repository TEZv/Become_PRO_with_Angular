import { Injectable } from '@angular/core';
import { BlogCardsInfo } from '../models/blog-card';

@Injectable({
  providedIn: 'root',
})
export class BlogCardsService {
  GetBlogCardsInfos(): BlogCardsInfo[] {
    return [
      {
        image: {
          path: '../../assets/projects/ua-delivery-project.png',
          darkModePath:
            '../../assets/dark-mode/ua-delivery-project-dark-mode.png',
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
      },
    ];
  }
}
