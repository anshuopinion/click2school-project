export interface Teacher {
  name: string;
  location: Location;
  subject: string;
  grades?: number[] | null;
}
export interface Location {
  city: string;
  state: string;
  country: string;
  state_short?: string;
  country_short?: string;
}
