import { Suspense} from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from 'components/ReusableComponents/MainContainer/MainContainer.styled';
import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from 'components/Notices/CategoriesNav/CategoriesNav';
import { Title, TabletWrapper, Wrapper } from './NoticesPage.styled';
import { AddPetBtn } from 'components/ReusableComponents/Button/Button';

const NoticesPage = () => {

    return (
    <Container>
      <Title>Find your favorite pet</Title>
      <NoticesSearch/>
      <Wrapper>

        <NoticesCategoriesNav/>

        <TabletWrapper>
        {/* <FilterBtn/> */}
        <AddPetBtn/>
        </TabletWrapper>

      </Wrapper>
      <Suspense fallback={null}>
          <Outlet />
        </Suspense>
    </Container>
    )
    
}

export default NoticesPage