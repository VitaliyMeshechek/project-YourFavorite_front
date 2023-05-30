import {HiOutlineLocationMarker, HiOutlineClock} from 'react-icons/hi'
import {FiHeart, FiTrash2} from 'react-icons/fi'
import {TbGenderFemale, TbGenderMale} from 'react-icons/tb'
import { Category, FavoriteBtn, Info, LoadMoreBtn, Photo, TabsWrapper, Thumb, Title, TrashBtn } from "./CategoriesItems.styled"
import { useDispatch, useSelector } from 'react-redux'
import { selectFavorite, selectOwn } from 'redux/noticesPage/selectors'
import { addToFavorite, deleteFromFavorite } from 'redux/noticesPage/operations'
import { getAge } from 'utils/getAge'
import { toast } from 'react-toastify'
import { useAuth } from 'hooks'
import { useEffect, useState } from 'react'

export const NoticesCategoriesItems = ({pet: {_id, img, title, location, birthday, sex, category}}) => {
    const {isLoggedIn} = useAuth()
    const [favStyle, setFavStyle] = useState(false)
    const [own, setOwn] = useState(false)
    // const favorites = useSelector(selectFavorite)
    // const own = useSelector(selectOwn)
    const dispatch = useDispatch()
    const newLocation = location.length > 5 ? location.slice(0, 4) + '...': location;
    const old = getAge(birthday)

    const favoriteItem = useSelector(selectFavorite).find(item => item._id === _id)
    const ownItem = useSelector(selectOwn).find(item => item._id === _id)

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
    toast.warn('Sorry, this option is available only for authorized users');
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
    setOwn(false)
}


    return (
        <>
        <Thumb>
            <Photo src={img}/>
            <Category>{category}</Category>

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