import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import {TbFilter} from 'react-icons/tb'
import {BsPlus} from 'react-icons/bs'
import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { CategoriesNav } from 'components/Notices/CategoriesNav/CategoriesNav';
import { Container } from 'pages/MainPage/MainPage.styled';
import { Title, Btn, NavLinkStyled, TabletWrapper, Wrapper } from './NoticesPage.styled';


const NoticesPage = () => {
    return (
    <Container>
      <Title>Find your favorite pet</Title>
      <NoticesSearch/>
      <Wrapper>

        <CategoriesNav/>

        <TabletWrapper>
          <Btn type="button">
            <span>Filter</span>
            <TbFilter/> 
          </Btn>

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