import './styles.scss'
import Placeholder from './placeholder'

interface CompetitionsViewProps {
    isLoading: boolean,
}

const CompetitionsView = ({
    isLoading,
} : CompetitionsViewProps
) => {
    return (
        isLoading
            ?   <Placeholder/>
            :   <div className='competitions'>
                    CompetitionsView
                </div>
    );
};

export default CompetitionsView;