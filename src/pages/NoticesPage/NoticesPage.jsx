import { Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/ReusableComponents/MainContainer/MainContainer.styled';
import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from 'components/Notices/CategoriesNav/CategoriesNav';
import { Title, TabletWrapper, Wrapper } from './NoticesPage.styled';
// import { AddPetBtn } from 'components/ReusableComponents/Button/Button';
import AddPetBtn from '../../components/AddPetBtn/AddPetBtn';

const NoticesPage = () => {

    return (
    <Container>
      <Title>Find your favorite pet</Title>
      <NoticesSearch/>
      <Wrapper>

        <NoticesCategoriesNav/>

        <TabletWrapper>
        {/* <FilterBtn/> */}
                 <AddPetBtn text="Add pet" path="/add-pet" isFixed={true}/>
        </TabletWrapper>

      </Wrapper>
      <Suspense fallback={null}>
          <Outlet />
        </Suspense>
    </Container>
    )
    
}

export default NoticesPage