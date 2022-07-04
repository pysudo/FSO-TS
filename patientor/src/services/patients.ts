import { v4 as uuidv4 } from 'uuid';

import patients from "../../data/patients";
import { Patient } from "../types";


const getPatientList = (): Omit<Patient, "ssn">[] => {
  return patients.map(({id, name, dateOfBirth, gender, occupation}) => ({
    id,
    name,
    dateOfBirth,
    gender,
    occupation
  }));
};


const addPatient = (patient: Omit<Patient, "id">): Patient => {
  const newPatient = {
    id: uuidv4(),
    ...patient
  };
  patients.push(newPatient);

  return newPatient;
};


export default {
  getPatientList,
  addPatient
};
