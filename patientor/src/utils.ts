import { newPatient, Gender } from "./types";


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const toNewPatient = (patient: any): newPatient => {
  const newPatient: newPatient = {
    name: parseStringTypedProperty(patient.name, "name"),
    dateOfBirth: parseDate(patient.dateOfBirth),
    ssn: parseStringTypedProperty(patient.ssn, "ssn"),
    gender: parseGender(patient.gender),
    occupation: parseStringTypedProperty(patient.occupation, "occupation")
  }; 

  return newPatient;
};


const isString = (name: unknown): name is string => {
  return typeof name === "string" || name instanceof String;
};


const isDate = (date: string): boolean => Boolean((Date).parse(date));


const parseStringTypedProperty = (property: unknown, key: string): string => {
  if (!property || !isString(property)) {
    throw new Error(`${key} does not exists or is invalid.`);
  }

  return property;
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const isGender = (gender: any): gender is Gender => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  return Object.values(Gender).includes(gender);
};


const parseDate = (date: unknown): string => {
  if (!date || !isString(date) || !isDate(date)) {
    throw new Error("date does not exists or is invalid.");
  }

  return date;
};


const parseGender = (gender: unknown): Gender => {
  if (!gender || !isGender(gender)) {
    throw new Error("gender does not exists or is invalid.");
  }

  return gender;
};


export { toNewPatient };
