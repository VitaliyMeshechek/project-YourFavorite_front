import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout/SharedLayout';
import MainPage from 'pages/MainPage/MainPage';
import NewsPage from 'pages/NewsPage/NewsPage';
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import OurFriendsPage from 'pages/OurFriendsPage/OurFriendsPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import UserPage from 'pages/UserPage/UserPage';
import AddPetPage from 'pages/AddPetPage/AddPetPage';
import { PageNotFound } from 'pages/PageNotFound/PageNotFound';


export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout />}/>
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
    </>
  )
};
