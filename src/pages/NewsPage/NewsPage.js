import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

const NewsPage = () => {
    return (
    <>
    <div>news page</div>
    <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
    )
    
}

export default NewsPage