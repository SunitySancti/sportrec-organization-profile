import './styles.scss'
import Placeholder from './placeholder'

interface AchievementsViewProps {
    isLoading: boolean,
}

const AchievementsView = ({
    isLoading,
} : AchievementsViewProps
) => {
    return (
        isLoading
            ?   <Placeholder/>
            :   <div className='achievements'>
                    AchievementsView
                </div>
    );
};

export default AchievementsView;