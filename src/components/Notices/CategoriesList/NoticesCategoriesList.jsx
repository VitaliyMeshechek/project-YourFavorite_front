import { useEffect, useState} from "react";
import { useSearchParams, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectFavorite, selectNotices, selectOwn, selectQuery } from 'redux/noticesPage/selectors';
import { fetchFavorites, fetchNotices, fetchUsersNotices } from "redux/noticesPage/operations";
import { NoticesCategoriesItems } from "../CategoriesItems/CategoriesItems";
import { CategoriesList } from "./NoticesCategoriesList.styled";
import { useAuth } from "hooks";

const NoticesCategoriesList = () => {
    const {isLoggedIn} = useAuth()
    const {categoryName} = useParams();
    const favorites = useSelector(selectFavorite)
    const own = useSelector(selectOwn)
    const notices = useSelector(selectNotices)
    const [pets, setPets] = useState()
    const query = useSelector(selectQuery)
    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
  
    useEffect(()=> {
        if(query) {
            setSearchParams({query})
            return
        }
    }, [setSearchParams, query])
    
    useEffect(() => {
        if(isLoggedIn) {
        dispatch(fetchFavorites(query))
        dispatch(fetchUsersNotices(query))
        }
        dispatch(fetchNotices({categoryName, query}))
    }, [categoryName, dispatch, isLoggedIn, query]);

    useEffect(() => {
        switch (categoryName) {
            case 'favorite':
                setPets(favorites)
                break;
            case 'own':
                setPets(own)
                break;
        
            default:
                setPets(notices)
                break;
        }
    }, [categoryName, favorites, notices, own])

       


    
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