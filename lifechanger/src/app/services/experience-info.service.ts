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
        title: 'SEO Junior | Online',
        location: 'Kyiv, Ukraine',
        project: `Aweb agency`,
        startDate: new Date('2024-05-25'),
        noEndDate: 'Present',
        experienceType: ExperienceType.Work,
        workType: EmploymentType.FullTime,
      },
      {
        title: 'SEO Intern | Online',
        location: 'Kyiv, Ukraine',
        project: `Aweb agency`,
        startDate: new Date('2024-05-14'),
        endDate: new Date('2024-05-19'),
        experienceType: ExperienceType.Work,
        workType: EmploymentType.Internship,
      },
      {
        title: 'Operator of the dispensing point | Offline',
        location: 'Kyiv, Ukraine',
        project: `ROZETKA's retail`,
        startDate: new Date('2023-10-06'),
        endDate: new Date('2024-02-05'),
        experienceType: ExperienceType.Work,
        workType: EmploymentType.FullTime,
      },
      {
        title: 'Bachelor in Entrepreneurship & Trade',
        project: `University "KROK" | Kyiv`,
        startDate: new Date('2021-10-10'),
        endDate: new Date('2023-07-31'),
        experienceType: ExperienceType.Education,
        workType: EmploymentType.FullTime,
      },
      {
        title: 'Junior specialist in Trade',
        project: `College of Art and Design | Kyiv`,
        startDate: new Date('2017-09-01'),
        endDate: new Date('2021-02-01'),
        experienceType: ExperienceType.Education,
        workType: EmploymentType.FullTime,
      },
    ];
  }
}