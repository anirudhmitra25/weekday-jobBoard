export interface IJobCard {
  companyName: string;
  jdLink: string;
  jdUid: string;
  jobDetailsFromCompany: string;
  jobRole: string;
  location: string;
  logoUrl: string;
  maxExp: number;
  maxJdSalary: number;
  minExp: number;
  minJdSalary: number;
  salaryCurrencyCode: string;
}

export interface Ifilter {
  remoteOnSite: Array<string>;
  techStack: Array<string>;
  role: Array<string>;
  minBasePay: number;
  minExperience: number;
  location: string;
  companyName: string;
}
export interface IFilters {
  filters: Ifilter;
  setFilter: (a: any) => void;
}

export interface IJobModal {
  open: any;
  handleClose: any;
  jobDetailsFromCompany: string;
  logoUrl: string;
  companyName: string;
  jobRole: string;
  location: string;
  salaryCurrencyCode: string;
  minJdSalary: number;
  maxJdSalary: number;
}
