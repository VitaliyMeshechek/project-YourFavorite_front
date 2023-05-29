import {HiOutlineLocationMarker, HiOutlineClock} from 'react-icons/hi'
import {FiHeart, FiTrash2} from 'react-icons/fi'
import {TbGenderFemale, TbGenderMale} from 'react-icons/tb'
import { Category, FavoriteBtn, Info, LoadMoreBtn, Photo, TabsWrapper, Thumb, Title, TrashBtn } from "./CategoriesItems.styled"
import { useDispatch, useSelector } from 'react-redux'
import { selectFavorite } from 'redux/noticesPage/selectors'
import { addToFavorite } from 'redux/noticesPage/operations'
import { getAge } from 'utils/getAge'

export const NoticesCategoriesItems = ({pet: {id, img, title, location, birthday, sex, category}}) => {
    const favorites = useSelector(selectFavorite)
    const dispatch = useDispatch()
    const newLocation = location.length > 5 ? location.slice(0, 4) + '...': location;
    const old = getAge(birthday)


const handleFavorite = () => {
const favorite = favorites.find(item => item.id === id)
if(favorite) {
    return console.log('already in favorites');
}
dispatch(addToFavorite)
}


    return (
        <>
        <Thumb>
            <Photo src={img}/>
            <Category>{category}</Category>

            <FavoriteBtn type='button' onClick={handleFavorite}>
                <FiHeart/>
            </FavoriteBtn>

            <TrashBtn type='button'>
                <FiTrash2/>
            </TrashBtn>

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