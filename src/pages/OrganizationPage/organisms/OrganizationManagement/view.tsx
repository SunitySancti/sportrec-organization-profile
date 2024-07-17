import './styles.scss'
import Placeholder from './placeholder'

interface OrganizationManagementViewProps {
    isLoading: boolean,
}

const OrganizationManagementView = ({
    isLoading,
} : OrganizationManagementViewProps
) => {
    return (
        isLoading
            ?   <Placeholder/>
            :   <div className='organization-management'>
                    OrganizationManagementView
                </div>
    );
};

export default OrganizationManagementView;