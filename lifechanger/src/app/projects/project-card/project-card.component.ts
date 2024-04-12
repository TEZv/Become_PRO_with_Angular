import { Component, Input } from '@angular/core';
import { ProjectCardsInfo } from '../../models/project-card';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css'
})
export class ProjectCardComponent {
  @Input()
  projectCardsInfo!: ProjectCardsInfo
}
