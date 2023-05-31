import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import toast from 'react-hot-toast';
import {HiOutlineLocationMarker, HiOutlineClock} from 'react-icons/hi'
import {FiHeart, FiTrash2} from 'react-icons/fi'
import {TbGenderFemale, TbGenderMale} from 'react-icons/tb'
import { getAge } from 'utils/getAge'
import { useAuth } from 'hooks'
import { selectFavorite, selectOwn } from 'redux/noticesPage/selectors'
import { addToFavorite, deleteFromFavorite, deleteUserNotice } from 'redux/noticesPage/operations'
import { Category, FavoriteBtn, Info, LoadMoreBtn, Photo, TabsWrapper, Thumb, Title, TrashBtn } from "./CategoriesItems.styled"
// import { useParams } from 'react-router-dom';

export const NoticesCategoriesItems = ({pet: {_id, avatarURL, title, location, birthday, sex, category}}) => {
    const {isLoggedIn} = useAuth()
    const [newCategory, setNewCategory] = useState()
    const [favStyle, setFavStyle] = useState(false)
    const [own, setOwn] = useState(false)
    const dispatch = useDispatch()
    const newLocation = location.length > 5 ? location.slice(0, 4) + '...': location;
    const old = getAge(birthday)

    const favoriteItem = useSelector(selectFavorite).find(item => item._id === _id)
    const ownItem = useSelector(selectOwn).find(item => item._id === _id)

    useEffect(() => {
        switch (category) {
            case 'lost-found':
                setNewCategory('lost/found')
                break;
                case 'for-free':
                    setNewCategory('in good hands')
                    break;
            default:
                break;
        }
    }, [category])

useEffect(() => {
    if(ownItem) {
        setOwn(true)
    }
    if(favoriteItem) {
        setFavStyle(true)
    }
    
}, [favoriteItem, ownItem])

const handleFavorite = e => {
    e.preventDefault()
if(!isLoggedIn) {
    setFavStyle(false)
    toast('Sorry, this option is available only for authorized users')
    return
}
if(favoriteItem) {
    dispatch(deleteFromFavorite(_id))
    setFavStyle(false)
    return 
}
dispatch(addToFavorite(_id))
}

const handleDeleteOwn = e => {
    e.preventDefault()
    dispatch(deleteUserNotice(_id))
    // dispatch(deletePet(_id))
    setOwn(false)
}


    return (
        <>
        <Thumb>
            <Photo src={avatarURL}/>
            <Category>{newCategory}</Category>

            <FavoriteBtn type='button' className={favStyle? 'active' : null} onClick={handleFavorite}>
                <FiHeart/>
            </FavoriteBtn>

            {own && <TrashBtn type='button' onClick={handleDeleteOwn}>
                <FiTrash2/>
            </TrashBtn>}

            <TabsWrapper>
            <Info>
                <HiOutlineLocationMarker/>
                {newLocation}
            </Info>
            <Info>
                <HiOutlineClock/>
                {old > 1? `${old} years`: `${old} year`} 
            </Info>
            <Info>
                {sex === 'female'? <TbGenderFemale/> : <TbGenderMale/>}
                {sex}
            </Info>
            </TabsWrapper>
            <Title>{title}</Title>
            <LoadMoreBtn>Learn more</LoadMoreBtn>
        </Thumb>
        </>
    )
}