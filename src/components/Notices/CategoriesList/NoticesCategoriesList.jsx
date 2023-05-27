import { useSearchParams } from 'react-router-dom';
import { NoticesCategoriesItems } from "../CategoriesItems/CategoriesItems";
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { CategoriesList } from "./NoticesCategoriesList.styled";
import { selectNotices, selectQuery } from 'redux/noticesPage/selectors';
import { fetchNotices } from "redux/noticesPage/operations";
import { useEffect } from "react";
import pets from './pets.json'

const NoticesCategoriesList = () => {
    const {categoryName} = useParams();
    const query = useSelector(selectQuery)
    const dispatch = useDispatch();
    // const pets = useSelector(selectNotices)
    const [searchParams, setSearchParams] = useSearchParams();
  
    useEffect(()=> {
        if(query) {
            setSearchParams({query})
        }
    }, [setSearchParams, query])

    useEffect(() => {
        dispatch(fetchNotices({categoryName, query}))
    }, [dispatch, categoryName, query])

    if(!pets.length) return null;


return (
<>
    <CategoriesList>
        {pets.map(pet => (
            <NoticesCategoriesItems pet={pet} key={pet.id}/>
        ))}
    </CategoriesList>
    </>
)

}

export default NoticesCategoriesList;