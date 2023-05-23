import { useParams } from "react-router-dom"
import pets from './pets.json'
import { CategoriesItems } from "../CategoriesItems/CategoriesItems";
import { CategoriesList } from "./NoticesCategoriesList.styled";


const NoticesCategoriesList = () => {
const {categoryName} = useParams();
console.log(pets);


return (
    <CategoriesList>
        {/* CategoriesList {categoryName} */}
        {pets.map(pet => (
            <CategoriesItems pet={pet} key={pet.id}/>
        ))}
    </CategoriesList>
)

}

export default NoticesCategoriesList;