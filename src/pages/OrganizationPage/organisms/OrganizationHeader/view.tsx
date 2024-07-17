import './styles.scss'
import Placeholder from './placeholder'

interface OrganizationHeaderViewProps {
    isLoading: boolean,
}

const OrganizationHeaderView = ({
    isLoading,
} : OrganizationHeaderViewProps
) => {
    return (
        isLoading
            ?   <Placeholder/>
            :   <div className='organization-header'>
                    OrganizationHeaderView
                </div>
    );
};

export default OrganizationHeaderView;