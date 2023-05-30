import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
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
import NoticesPage from 'pages/NoticesPage/NoticesPage';
import NoticesCategoriesList from './Notices/CategoriesList/NoticesCategoriesList';
import OurFriendsPage from 'pages/OurFriendsPage/OurFriendsPage';
import RegisterPage from 'pages/RegisterPage/RegisterPage';
import LoginPage from 'pages/LoginPage/LoginPage';
import UserPage from 'pages/UserPage/UserPage';
import AddPetPage from 'pages/AddPetPage/AddPetPage';
import PageNotFound from 'pages/PageNotFound/PageNotFound';

import { PrivateRoute } from './PrivateRoute';
import { RestrictedRoute } from './RestrictedRoute';
import { refreshUser } from 'redux/auth/operations';
// import FindPeds from 'pages/FindePets/FindPeds';

export const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);
  return (
    <PageColor>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<MainPage />} />
          <Route path="main" element={<MainPage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="notices" element={<NoticesPage />}>
            <Route index element={<Navigate to="/notices/sell" />} />
            <Route path=":categoryName" element={<NoticesCategoriesList />} />
            <Route
              path="favorite"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<NoticesCategoriesList />}
                />
              }
            />
            <Route
              path="own"
              element={
                <PrivateRoute
                  redirectTo="/login"
                  component={<NoticesCategoriesList />}
                />
              }
            />
          </Route>
          <Route path="friends" element={<OurFriendsPage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute
                redirectTo="/user"
                component={<RegisterPage />}
              />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute redirectTo="/user" component={<LoginPage />} />
            }
          />
          <Route
            path="user"
            element={
              <PrivateRoute redirectTo="/login" component={<UserPage />} />
            }
          />
          <Route path="add-pet" element={<AddPetPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </PageColor>
  );
};
