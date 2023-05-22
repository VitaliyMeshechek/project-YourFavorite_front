import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NoticesSearch } from 'components/Notices/NoticesSearch/NoticesSearch';
import { Nav } from 'components/Notices/CategoriesNav/CategoriesNav';


const NoticesPage = () => {
    return (
    <>
    <NoticesSearch/>
    <Nav/>
    <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
    )
    
}

export default NoticesPage