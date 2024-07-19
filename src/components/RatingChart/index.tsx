import './styles.scss'
import Icon from 'components/Icon'

interface RatingChartProps {

}

const RatingChart = ({

} : RatingChartProps
) => {
    const data = {
        year: '2023',
        ratingDiff: 55,
    }

    const { year,
            ratingDiff } = data

    const diffIconName = ratingDiff > 0
        ? 'arrowUpS'
        : 'arrowDownS'

    const currentRatingPercentage = 64;

    return (
        <div className='rating-chart'>
            <div className='graphic'>
                <img src="/pict/graphic.png"/>
                <div className='end-line'/>
                <div className='hor-line' style={{
                    height: currentRatingPercentage + '%'
                }}>
                    <div className='rating-diff-tag'>
                        { ratingDiff }
                        <Icon name={ diffIconName } size={17}/>
                    </div>
                </div>
            </div>
            <div className='timeline-pointers'/>
            <div className='year timeline'>
                <span>{ year } - 01</span>
                <span>{ year } - 06</span>
                <span>{ year } - 12</span>
            </div>
        </div>
    )
};

export default RatingChart
