import { Outlet } from 'react-router-dom'

import AppHeader from './view'


const AppLayout = () => {
    return (
        <>
            <AppHeader/>
            <div className='work-space'>
                <Outlet/>
            </div>
        </>
    );
};

export default AppLayout;