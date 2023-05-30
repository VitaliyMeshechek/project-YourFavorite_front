import { useEffect, useState } from "react";
import { useSearchParams, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite, selectNotices, selectOwn, selectQuery } from 'redux/noticesPage/selectors';
import { fetchFavorites, fetchNotices, fetchUsersNotices } from "redux/noticesPage/operations";
import { NoticesCategoriesItems } from "../CategoriesItems/CategoriesItems";
import { CategoriesList } from "./NoticesCategoriesList.styled";

const NoticesCategoriesList = () => {
    const {categoryName} = useParams();
    const favorites = useSelector(selectFavorite)
    const own = useSelector(selectOwn)
    const pets = useSelector(selectNotices)
    const query = useSelector(selectQuery)
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
  
    useEffect(()=> {
        if(query) {
            setSearchParams({query})
        }
        
    }, [setSearchParams, query])
    
    useEffect(() => {
        dispatch(fetchFavorites(query))
        dispatch(fetchUsersNotices(query))
        dispatch(fetchNotices({categoryName, query}))
        // switch (categoryName) {
        //     case 'favorite':
                
        //         break;
        //     case 'own':
                 
        //         break;
        
        //     default:
                
        //         break;
        // }
    }, [dispatch, categoryName, query])

       


    
    if(!pets) {
        return null
    };

return (
    <>
        <CategoriesList>
        { pets.map(pet => (
            <NoticesCategoriesItems pet={pet} key={pet._id}/>
        ))}
        </CategoriesList>
    </>
)

}

export default NoticesCategoriesList;