import './styles.scss'
import Placeholder from './placeholder'


interface OrganizationRatingViewProps {
    isLoading: boolean,
}

const OrganizationRatingView = ({
    isLoading
} : OrganizationRatingViewProps
) => {
    return (
        isLoading
            ?   <Placeholder/>
            :   <div className='organization-rating'>
                    Рейтинг организации
                </div>
    );
};

export default OrganizationRatingView;