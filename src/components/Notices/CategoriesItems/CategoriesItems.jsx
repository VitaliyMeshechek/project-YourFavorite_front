import {HiOutlineLocationMarker, HiOutlineClock} from 'react-icons/hi'
import {TbGenderFemale, TbGenderMale} from 'react-icons/tb'
import { Category, Location, Photo, TabsWrapper, Thumb } from "./CategoriesItems.styled"

export const CategoriesItems = ({pet: {img, title, location, old, sex, category}}) => {

    const newLocation = location.length > 5 ? location.slice(0, 4) + '...': location;


    return (
        <>
        <Thumb>
            <Photo src={img}/>
            <Category>{category}</Category>
            <TabsWrapper>
            <Location>
                <HiOutlineLocationMarker/>
                {newLocation}
            </Location>
            <Location>
                <HiOutlineClock/>
                {old}
            </Location>
            <Location>
                {sex === 'female'? <TbGenderFemale/> : <TbGenderMale/>}
                {sex}
            </Location>
            </TabsWrapper>
        </Thumb>
        </>
    )
}