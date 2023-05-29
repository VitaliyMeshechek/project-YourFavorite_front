import { useEffect } from "react";
import { useSearchParams, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectNotices, selectQuery } from 'redux/noticesPage/selectors';
import { fetchFavorites, fetchNotices } from "redux/noticesPage/operations";
import { NoticesCategoriesItems } from "../CategoriesItems/CategoriesItems";
import { CategoriesList } from "./NoticesCategoriesList.styled";

const NoticesCategoriesList = () => {
    const pets = useSelector(selectNotices)
    const {categoryName} = useParams();
    const query = useSelector(selectQuery)
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();

  
    useEffect(()=> {
        if(query) {
            setSearchParams({query})
        }
        
    }, [setSearchParams, query])
    
    useEffect(() => {
        if(categoryName === 'favorite') {
            dispatch(fetchFavorites(query))
            return;
        }
        dispatch(fetchNotices({categoryName, query}))
    }, [dispatch, categoryName, query])


    
    if(!pets.length) {
        return null
    };

    console.log(searchParams);
return (
<>
    <CategoriesList>
        {pets.map(pet => (
            <NoticesCategoriesItems pet={pet} key={pet._id}/>
        ))}
    </CategoriesList>
    </>
)

}

export default NoticesCategoriesList;