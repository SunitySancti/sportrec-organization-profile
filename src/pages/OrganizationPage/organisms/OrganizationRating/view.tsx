import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import styled from '@emotion/styled';

import './styles.scss'
import * as style from '../../../../style-config.js'
import Placeholder from './placeholder'
import RatingChart from 'components/RatingChart'


interface OrganizationRatingViewProps {
    isLoading?: boolean,
}  


const StyledCard = styled(Card)`
    background-color: ${ style.grayscale_00 };  
    border-radius: ${ style.lengthUnit }px;  
    border: unset;  
    box-shadow: unset;
`;

const StyledCardContent = styled(CardContent)`  
    color: $grayScale_70;
    display: flex;
    flex-flow: column;
    gap: 24px;
`;

interface TypoProps {
    text: string,
    type: 'general' | 'card-header' | 'rating-description-header'
}

const Typo = ({
    text,
    type
} : TypoProps
) => {
    let variant, color, font, letterSpacing;
    switch(type) {
        case 'general':
            variant = 'body1' as const
            color = style.grayscale_70;
            font = style.Inter_SB_12pt;
            letterSpacing = '-0.5px'
            break
        case 'card-header':
            variant = 'h2' as const
            color = style.grayscale_70;
            font = style.Inter_SB_20pt;
            break
        case 'rating-description-header':
            variant = 'h3' as const
            color = style.green_1;
            font = style.Inter_SB_14pt;
    }

    return (
        <Typography
            children={ text }
            variant={ variant }
            sx={{ color, font, letterSpacing }}
        />
    )
}

interface RatingDescriptionProps {
    ratingData: {
        ratingClass: string,
        absolute: number,
        weekGrow: number,
        topRange: number,
        isGrow: boolean,
        description: string
    }
}

const RatingDescription = ({
    ratingData
}: RatingDescriptionProps ) => {
    const { ratingClass,
            // absolute,
            // weekGrow,
            // topRange,
            // isGrow,
            description } = ratingData
    return (
        <div className='rating-description'>
            <div className='header'>
                <Typo type='rating-description-header'
                    text={ 'Рейтинг : ' + ratingClass }
                />
                <div className='data'/>
            </div>
            <div className='body'>
                <Typo type='general'
                      text={ description }
                />
            </div>
        </div>
    )
}




const OrganizationRatingView = ({
    isLoading
} : OrganizationRatingViewProps
) => {
    const ratingData = {
        ratingClass: 'Очень высокий',
        absolute: 23450,
        weekGrow: 1.62,
        topRange: 10,
        isGrow: true,
        description: 'Организация показывает достаточно хорошие результаты на тренировках и соревнованиях, а также за последний год стабильно поднимается в рейтинге.'
    }
    return (
        isLoading
            ?   <Placeholder/>
            :   <StyledCard>
                    <StyledCardContent>
                        <Typo type='card-header'
                              text='Рейтинг организации'
                        />
                        <RatingChart/>
                        <RatingDescription {...{ ratingData }}/>
                    </StyledCardContent>  
                </StyledCard>
    );
};

export default OrganizationRatingView
