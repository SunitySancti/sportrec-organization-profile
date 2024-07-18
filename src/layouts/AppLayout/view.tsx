import { NavLink } from 'react-router-dom'

import './styles.scss'

// interface AppHeaderProps {
// }

const AppHeader = () => {
    return (
        <div className='app-header with-shadow'>
            <NavLink end to='/organizations/altay'>
                Федерация спорта Алтайского края
            </NavLink>
            <div></div>
            <NavLink end to='/organizations/Alex'>
                Александр, React-разработчик
            </NavLink>
        </div>
    );
};

export default AppHeader;