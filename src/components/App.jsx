import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
// import { PageNotFound } from 'pages/PageNotFound/PageNotFound';

const MainPage = lazy(() => import('pages/MainPage/MainPage'));
const NewsPage = lazy(() => import('pages/NewsPage/NewsPage'));
const NoticesPage = lazy(() => import('pages/NoticesPage/NoticesPage'));
const OurFriendsPage = lazy(() => import('pages/OurFriendsPage/OurFriendsPage'));



export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout />}/>
        {/* <Route index element={<div></div>} /> */}
        <Route path="main" element={<MainPage/>} />
        <Route path="news" element={<NewsPage/>} />
        <Route path="notices" element={<NoticesPage/>}>
        <Route path="friends" element={<OurFriendsPage/>}></Route>
          
        {/* <Route path="*" element={<PageNotFound/>} /> */}
      </Route>
    </Routes>
  </>
  );
};
