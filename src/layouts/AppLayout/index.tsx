import { Outlet } from 'react-router-dom'

const AppLayout = () => {
    return (
        <>
            <div>
                AppHeader
            </div>
            <Outlet/>
        </>
    );
};

export default AppLayout;