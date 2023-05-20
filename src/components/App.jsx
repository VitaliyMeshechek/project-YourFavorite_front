import { Route, Routes } from 'react-router-dom';

import { PageColor } from './App.styled';

const SharedLayout = lazy(() => import('./SharedLayout/SharedLayout'));
const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() =>import('pages/OurFriendsPage/OurFriendsPage'));
const RegisterPage = lazy(() =>import('pages/RegisterPage/RegisterPage'));
const LoginPage = lazy(() =>import('pages/LoginPage/LoginPage'));
const UserPage = lazy(() =>import('pages/UserPage/UserPage'));
const AddPetPage = lazy(() =>import('pages/AddPetPage/AddPetPage'));
const PageNotFound = lazy(() =>import('pages/PageNotFound/Page'));



export const App = () => {
  return (
    <PageColor>
      <Routes>
        <Route path="/" element={<SharedLayout />} />
        {/* <Route index element={<div></div>} /> */}
        <Route path="main" element={<MainPage/>} />
        <Route path="news" element={<NewsPage/>} />
        <Route path="notices" element={<NoticesPage/>}/>
        <Route path="friends" element={<OurFriendsPage/>}/>
        <Route path="register" element={<RegisterPage/>}/>
        <Route path="login" element={<LoginPage/>}/>
        <Route path="user" element={<UserPage/>}/>
        <Route path="add-pet" element={<AddPetPage/>}/>
        <Route path="*" element={<PageNotFound/>} />

    </Routes>
</PageColor>
  )
};
