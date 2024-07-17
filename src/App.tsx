import { useState } from 'react'
import { Navigate,
        Routes,
        Route, 
        useNavigate,
        Outlet } from 'react-router-dom'

import './App.scss'
import AppLayout from 'layouts/AppLayout'
import OrganizationPage from 'pages/OrganizationPage'
// import OrganizationsPage from 'pages/OrganizationsPage'

const App = () => {
    return (
        <>
            <Routes>
                <Route path='/' element={ <AppLayout/> }>
                    <Route path='organizations' element={ <Outlet/> }>
                        {/* <Route index element={ <OrganizationsPage/> }/> */}
                        <Route path=':organizationId' element={ <OrganizationPage/> }/>
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default App
