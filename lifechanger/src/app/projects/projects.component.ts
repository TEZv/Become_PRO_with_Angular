import { Component, OnInit, AfterViewInit } from '@angular/core';
import Swiper from 'swiper';
import { ProjectCardsInfo } from '../models/project-card';
import { ProjectCardsService } from '../services/project-card.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css'],
})
export class ProjectsComponent implements AfterViewInit {
  projectCardsInfo: ProjectCardsInfo[] = [];
  swiper: Swiper | undefined;

  constructor(private projectCardsService: ProjectCardsService) {}

  ngOnInit(): void {
    this.projectCardsInfo = this.projectCardsService.GetProjectCardsInfos();
  }

  ngAfterViewInit(): void {
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
    });
  }
}
