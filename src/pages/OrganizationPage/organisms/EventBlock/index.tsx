import EventBlockView from './view.tsx'

const EventBlock = ({...props}) => {
    return (
        <EventBlockView isLoading {...props}/>
    );
};

export default EventBlock;