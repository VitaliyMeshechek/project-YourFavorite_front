import { Suspense} from 'react';
import { Outlet } from 'react-router-dom';
// import {TbFilter} from 'react-icons/tb'
import {BsPlus} from 'react-icons/bs'
import { Container } from 'components/ReusableComponents/MainContainer/MainContainer.styled';
import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { NoticesCategoriesNav } from 'components/Notices/CategoriesNav/CategoriesNav';
import { Title, NavLinkStyled, TabletWrapper, Wrapper } from './NoticesPage.styled';

const NoticesPage = () => {

    return (
    <Container>
      <Title>Find your favorite pet</Title>
      <NoticesSearch/>
      <Wrapper>

        <NoticesCategoriesNav/>

        <TabletWrapper>
          {/* <Btn type="button">
            <span>Filter</span>
            <TbFilter/> 
          </Btn> */}

          <NavLinkStyled to="/add-pet" key="/add-pet">
          <span>Add pet</span>
            <BsPlus/>
          </NavLinkStyled>
        </TabletWrapper>

      </Wrapper>
      <Suspense fallback={null}>
          <Outlet />
        </Suspense>
    </Container>
    )
    
}

export default NoticesPage