import axios from 'axios';
import { ICharacter } from '../types/character';
import { ISpell } from '../types/spell';

const apiClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

const handleResponse = (response: any) => {
  return response.data.map((item: any) => {
    for (const key in item) {
      if (item[key] === "" || item[key] === null) {
        item[key] = "-";
      }
      if (typeof item[key] === 'object' && item[key] !== null) {
        for (const subKey in item[key]) {
          if (item[key][subKey] === "" || item[key][subKey] === null) {
            item[key][subKey] = "-";
          }
        }
      }
    }
    return item;
  });
};

const handleError = (error: any) => {
  console.error("API Error: ", error);
  throw error;
};

export const getStudents = async (): Promise<ICharacter[]> => {
  try {
    const response = await apiClient.get('/characters/students');
    return handleResponse(response) as ICharacter[];
  } catch (error) {
    return handleError(error);
  }
};

export const getStaff = async (): Promise<ICharacter[]> => {
  try {
    const response = await apiClient.get('/characters/staff');
    return handleResponse(response) as ICharacter[];
  } catch (error) {
    return handleError(error);
  }
};

export const getSpells = async (): Promise<ISpell[]> => {
  try {
    const response = await apiClient.get('/spells');
    return handleResponse(response) as ISpell[];
  } catch (error) {
    return handleError(error);
  }
};

export const getStudentsByHouse = async (house: string): Promise<ICharacter[]> => {
  try {
    const response = await apiClient.get(`/characters/house/${house}`);
    const filteredData = response.data.filter((char: ICharacter) => char.house.toLowerCase() === house.toLowerCase());
    
    return handleResponse({ data: filteredData }) as ICharacter[];
  } catch (error) {
    return handleError(error);
  }
};