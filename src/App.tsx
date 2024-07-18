import { Routes,
         Route,
         Outlet,
         Navigate } from 'react-router-dom'

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
                        <Route index element={ <Navigate to='/organizations/altay' replace/> }/>
                        {/* <Route index element={ <OrganizationsPage/> }/> */}
                        <Route path=':organizationId' element={ <OrganizationPage/> }/>
                    </Route>
                </Route>
                <Route path='*' element={ <Navigate to='/organizations/altay' replace/> }/>
            </Routes>
        </>
    )
}

export default App
