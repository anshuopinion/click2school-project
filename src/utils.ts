import { Teacher } from "./interfaces/Teacher";

export const filterTeachersByCountry = (
  teachers: Teacher[],
  countryCode: string
) => {
  return teachers.filter((teacher) => {
    if (teacher.location.country_short) {
      return teacher.location.country_short === countryCode;
    } else {
      false;
    }
  });
};
