import { Injectable } from '@angular/core';
import {
  EmploymentType,
  ExperienceInfo,
  ExperienceType,
} from '../models/experience-info.model';

@Injectable({
  providedIn: 'root',
})
export class ExperienceInfoService {
  GetWorkExperienceInfos(): ExperienceInfo[] {
    return [
      {
        title: 'Junior Web Developer',
        location: 'Bengaluru',
        project: `Dr. Rajkumar's Learning App`,
        startDate: new Date('2021-09-01'),
        endDate: new Date('2021-12-31'),
        experienceType: ExperienceType.Work,
        workType: EmploymentType.FullTime,
      },
      {
        title: 'Web Development Intern',
        location: 'Bengaluru',
        project: `IonPixelz Web Solutions`,
        startDate: new Date('2021-09-01'),
        endDate: new Date('2021-12-31'),
        experienceType: ExperienceType.Work,
        workType: EmploymentType.Internship,
      },
      {
        title: 'SEO / SEM Specialist',
        location: 'Bengaluru',
        project: `HAAPS`,
        startDate: new Date('2021-09-01'),
        endDate: new Date('2021-12-31'),
        experienceType: ExperienceType.Work,
        workType: EmploymentType.Internship,
      },
      {
        title: 'Bachelor in Electronics & Communication',
        project: `Bangalore Instutute of Technology`,
        startDate: new Date('2021-09-01'),
        endDate: new Date('2021-12-31'),
        experienceType: ExperienceType.Education,
        workType: EmploymentType.FullTime,
      },
    ];
  }
}
