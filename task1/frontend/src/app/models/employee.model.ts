export interface Employee {
    firstName: string;
    lastName: string;
    dob: string;
    bloodGroup: string;
    mobile: string;
    email: string;
    status: 'Completed' | 'Pending' | 'In Progress' | 'Cancelled';
  }
  