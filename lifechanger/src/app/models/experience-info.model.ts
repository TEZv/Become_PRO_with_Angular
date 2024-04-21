export enum ExperienceType {
  Work = 'Work',
  Education = 'Education',
}

export enum EmploymentType {
  Internship = 'Internship',
  FullTime = 'Full Time',
}
export interface ExperienceInfo {
  title: string;
  experienceType: ExperienceType;
  project: string;
  location?: string;
  startDate: Date;
  endDate?: Date;
  noEndDate?: string;
  workType: EmploymentType;
}
