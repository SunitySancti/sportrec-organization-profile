import './styles.scss'
import Placeholder from './placeholder'

interface AthletesViewProps {
    isLoading: boolean,
}

const AthletesView = ({
    isLoading,
} : AthletesViewProps
) => {
    return (
        isLoading
            ?   <Placeholder/>
            :   <div className='athletes'>
                    AthletesView
                </div>
    );
};

export default AthletesView;