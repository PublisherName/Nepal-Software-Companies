export interface CompanyInterface {
  id: number;
  name: string;
  address: string;

  city: string;
  email: string;
  phone: string;
  website: string;
  career_page: string;
  linkedin: string;
}

export interface CompanyAPIResponseInterface {
  count: number;
  next: string | null;
  previous: string | null;
  results: CompanyInterface[];
}
