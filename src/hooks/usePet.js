import { useSelector } from 'react-redux';
import {
  selectPet
} from '../redux/auth/selectors';

export const usePet = () => {
  
  const pet = useSelector(selectPet);
console.log(pet)
  return {
  pet
  }
};