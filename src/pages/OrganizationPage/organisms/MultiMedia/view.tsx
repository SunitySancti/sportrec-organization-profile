import './styles.scss'
import Placeholder from './placeholder'

interface MultiMediaViewProps {
    isLoading: boolean,
}

const MultiMediaView = ({
    isLoading,
} : MultiMediaViewProps
) => {
    return (
        isLoading
            ?   <Placeholder/>
            :   <div className='multi-media'>
                    MultiMediaView
                </div>
    );
};

export default MultiMediaView;