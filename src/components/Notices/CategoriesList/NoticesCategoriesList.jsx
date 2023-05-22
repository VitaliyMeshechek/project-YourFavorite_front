import { useParams } from "react-router-dom"
import { NoticesCategoriesItems } from "../CategoriesItems/CategoriesItems";

import { CategoriesList } from "./NoticesCategoriesList.styled";
import pets from './pets.json'




const NoticesCategoriesList = () => {
const {categoryName} = useParams();


return (
<>
    CategoriesList {categoryName}
    <CategoriesList>
        {pets.map(pet => (
            <NoticesCategoriesItems pet={pet} key={pet.id}/>
        ))}
    </CategoriesList>
    </>
)

}

export default NoticesCategoriesList;