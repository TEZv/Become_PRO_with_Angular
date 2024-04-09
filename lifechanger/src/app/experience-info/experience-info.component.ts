import { Component, Input } from '@angular/core';
import { ExperienceInfo } from '../models/experience-info.model';

@Component({
  selector: 'app-experience-info',
  templateUrl: './experience-info.component.html',
  styleUrl: './experience-info.component.css'
})

export class ExperienceInfoComponent {
  @Input()
  experienceInfo!: ExperienceInfo;
}
