import { Component } from '@angular/core';
import { ExperienceInfoService } from '../services/experience-info.service';
import {
  ExperienceInfo,
  ExperienceType,
} from '../models/experience-info.model';

@Component({
  selector: 'app-biography',
  templateUrl: './biography.component.html',
  styleUrl: './biography.component.css',
})
export class BiographyComponent {
  workExperienceInfos: ExperienceInfo[] = [];
  constructor(private readonly experienceInfoService: ExperienceInfoService) {
    this.workExperienceInfos =
      this.experienceInfoService.GetWorkExperienceInfos();
  }

  isAnyWorkType(): boolean {
    return this.workExperienceInfos.some(
      (info) => info.experienceType === ExperienceType.Work
    );
  }

  isAnyEducationType(): boolean {
    return this.workExperienceInfos.some(
      (info) => info.experienceType === ExperienceType.Education
    );
  }

  filterByEducation(): ExperienceInfo[] {
    return this.filterByType(ExperienceType.Education);
  }

  filterByWork(): ExperienceInfo[] {
    return this.filterByType(ExperienceType.Work);
  }

  private filterByType(type: ExperienceType): ExperienceInfo[] {
    return this.workExperienceInfos.filter((info) => info.experienceType === type);
  }
}
