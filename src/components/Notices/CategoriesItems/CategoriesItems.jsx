import {HiOutlineLocationMarker, HiOutlineClock} from 'react-icons/hi'
import {FiHeart, FiTrash2} from 'react-icons/fi'
import {TbGenderFemale, TbGenderMale} from 'react-icons/tb'
import { Category, FavoriteBtn, Info, LoadMoreBtn, Photo, TabsWrapper, Thumb, Title, TrashBtn } from "./CategoriesItems.styled"

export const NoticesCategoriesItems = ({pet: {img, title, location, old, sex, category}}) => {

    const newLocation = location.length > 5 ? location.slice(0, 4) + '...': location;


    return (
        <>
        <Thumb>
            <Photo src={img}/>
            <Category>{category}</Category>

            <FavoriteBtn type='button'>
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
                {old}
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