import { Component, OnInit } from '@angular/core';
import { ProjectCardsInfo } from '../models/project-card';
import { ProjectCardsService } from '../services/project-card.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectCardInfos: ProjectCardsInfo[] = [];

  constructor(private projectCardsService: ProjectCardsService) { }

  ngOnInit(): void {
    this.projectCardInfos = this.projectCardsService.GetProjectCardsInfos();
  }
}
