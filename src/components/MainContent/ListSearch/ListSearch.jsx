import { ItemSearch } from '../ItemSearch/ItemSearch';
import { ListSearch } from './ListSearch.styled';

export const LisSearch = ({ pets }) => {
  return (
    <ListSearch>
      {pets.map(pet => (
        <ItemSearch
          img={pet.img}
          title={pet.title}
          location={pet.location}
          old={pet.old}
          sex={pet.sex}
        />
      ))}
    </ListSearch>
  );
};
