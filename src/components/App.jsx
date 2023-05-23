import { Route, Routes } from 'react-router-dom';

import { PageColor } from './App.styled';

// const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
// const MainPage = lazy(() => import('pages/MainPage/MainPage'));
// const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
// const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
// const OurFriendsPage = lazy(() =>import('pages/OurFriendsPage/OurFriendsPage'));
// const RegisterPage = lazy(() =>import('pages/RegisterPage/RegisterPage'));
// const LoginPage = lazy(() =>import('pages/LoginPage/LoginPage'));
// const UserPage = lazy(() =>import('pages/UserPage/UserPage'));
// const AddPetPage = lazy(() =>import('pages/AddPetPage/AddPetPage'));
// const PageNotFound = lazy(() =>import('pages/PageNotFound/Page'));

import SharedLayout from './SharedLayout/SharedLayout';
import MainPage from 'pages/MainPage/MainPage';
import NewsPage from 'pages/NewsPage/NewsPage';
import OurFriendsPage from 'pages/OurFriendsPage/OurFriendsPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import UserPage from 'pages/UserPage/UserPage';
import AddPetPage from 'pages/AddPetPage/AddPetPage';
import PageNotFound from 'pages/PageNotFound/PageNotFound';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import NoticesCategoriesList from './Notices/CategoriesList/NoticesCategoriesList';
// import FindPeds from 'pages/FindePets/FindPeds';



export const App = () => {
  return (
    <PageColor>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
        <Route index element={<MainPage />} />
        <Route path="main" element={<MainPage />} />
        <Route path="news" element={<NewsPage />} />
        {/* <Route path="FindPets" element={<FindPeds />} /> */}
        <Route path="notices" element={<NoticesPage />}>
          <Route path=":categoryName" element={<NoticesCategoriesList />}/>
        </Route>
        <Route path="friends" element={<OurFriendsPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="add-pet" element={<AddPetPage />} />
        <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </PageColor>
  );
};
