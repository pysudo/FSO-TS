import patients from "../../data/patients.json";
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


export default {
  getPatientList
};
