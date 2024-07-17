import './styles.scss'
import Placeholder from './placeholder'

interface CoachesViewProps {
    isLoading: boolean,
}

const CoachesView = ({
    isLoading,
} : CoachesViewProps
) => {
    return (
        isLoading
            ?   <Placeholder/>
            :   <div className='coaches'>
                    CoachesView
                </div>
    );
};

export default CoachesView;