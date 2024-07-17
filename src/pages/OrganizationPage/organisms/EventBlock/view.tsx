import './styles.scss'
import Placeholder from './placeholder'

interface EventBlockViewProps {
    isLoading: boolean,
}

const EventBlockView = ({
    isLoading,
    ...props
} : EventBlockViewProps
) => {
    return (
        isLoading
            ?   <Placeholder {...props}/>
            :   <div className='event-block' {...props}>
                    EventBlockView
                </div>
    );
};

export default EventBlockView;