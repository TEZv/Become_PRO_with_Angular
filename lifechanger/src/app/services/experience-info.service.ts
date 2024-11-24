import { Injectable } from '@angular/core';
import {
  WorkType,
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
        title: 'Researcher Specialist | Online',
        location: 'Kyiv, Ukraine',
        project: `NetPeak agency`,
        startDate: new Date('2025-11-14'),
        experienceType: ExperienceType.Work,
        workType: WorkType.FullTime,
      },
      {
        title: 'Researcher Specialist | Online',
        location: 'Kyiv, Ukraine',
        project: `NetPeak agency`,
        startDate: new Date('2024-05-27'),
        experienceType: ExperienceType.Work,
        workType: WorkType.FullTime,
      },
      {
        title: 'SEO Intern | Online',
        location: 'Kyiv, Ukraine',
        project: `Aweb agency`,
        startDate: new Date('2024-05-14'),
        endDate: new Date('2024-05-20'),
        experienceType: ExperienceType.Work,
        workType: WorkType.Internship,
      },
      {
        title: 'Bachelor in Entrepreneurship & Trade',
        project: `University "KROK"`,
        location: 'Kyiv, Ukraine',
        startDate: new Date('2021-10-10'),
        endDate: new Date('2023-07-31'),
        experienceType: ExperienceType.Education,
        workType: WorkType.FullTime,
      },
      {
        title: 'Junior specialist in Trade',
        project: `College of Art and Design`,

        startDate: new Date('2017-09-01'),
        endDate: new Date('2021-02-01'),
        experienceType: ExperienceType.Education,
        workType: WorkType.FullTime,
      },
    ];
  }
}
