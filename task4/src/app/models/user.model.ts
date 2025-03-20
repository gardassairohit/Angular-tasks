export interface User {
  id?: string;
  username: string;
  email: string;
  password: string;
  personalDetails?: PersonalDetails;
  educationalDetails?: EducationalDetails;
  achievements?: Achievements;
  familyDetails?: FamilyDetails;
}

export interface PersonalDetails {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  gender: string;
}

export interface EducationalDetails {
  highestDegree: string;
  institution: string;
  yearOfGraduation: number;
}

export interface Achievements {
  awards: string[];
  certifications: string[];
}

export interface FamilyDetails {
  fatherName: string;
  motherName: string;
  siblings: string[];
}