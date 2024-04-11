import { Component, Input } from '@angular/core';
import Swiper from 'swiper';
import { ProjectCardsInfo } from '../../models/project-card';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input()
  projectCardsInfo!: ProjectCardsInfo

  swiper!: Swiper;

  constructor() { }

  ngAfterViewInit() {
    this.swiper = new Swiper('.swiper-container', {
      // Optional parameters
      loop: true,

      // If you need pagination
      pagination: {
        el: '.swiper-pagination',
      },

      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      // And if we need scrollbar
      scrollbar: {
        el: '.swiper-scrollbar',
      },
    });
  }
}
