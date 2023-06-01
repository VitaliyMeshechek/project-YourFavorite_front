
import { Image, NotFoundSection, Title } from "./ParkedPage.styled"
import parkedPageImg from '../../../images/parked-page.png';

export const ParkedPage = () => {
    return(
        <>
            <NotFoundSection>
                <Title>
                Ooops!<br/> Try searching for something else!
                </Title>
                <Image src={parkedPageImg}/>
            </NotFoundSection>
        </>
    )
}