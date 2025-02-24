import { Fragment, useState } from 'react'

import './styles.scss'
import Placeholder from './placeholder'
import Button from 'components/Button'
import TabButton from 'components/TabButton'


interface OrganizationHeaderViewProps {
    isLoading?: boolean,
    response: any
}


const OrganizationHeaderView = ({
    isLoading,
    response
} : OrganizationHeaderViewProps
) => {

    // Это должно лежать в index.tsx, разумеется
    const [isCompetitions, setIsCompetitions] = useState(true);
    const [isSubscribing, setIsSubscribing] = useState(true);
    const [isGettingMore, setIsGettingMore] = useState(false);
    const [isSharing, setIsSharing] = useState(false);
    const [isInstagramming, setIsInstagramming] = useState(false);    
    const [isVKing, setIsVKing] = useState(false);    
    const [isTelegramming, setIsTelegramming] = useState(false);    


    const { title,
            imgPath,
            country,
            location,
            sportTypes,
            ratingPosition,
            athletIds,
            nSubscribers,
            teams,
            awards,
            hhLink,
            telegramLink } = response

    const [ gold, silver, bronze ] = awards || [];

    return (
        isLoading
            ?   <Placeholder/>
            :   <div className='organization-header'>

                    <div className='avatar'>
                        <img src={ imgPath }/>
                        <div className={ country + 'flag' }>
                            <div/><div/><div/>
                        </div>
                    </div>

                    <div className='header'/>

                    <div className='body'>
                        <div className='rating-tag'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
                                <path stroke="#31C16B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 14.996v-12m0 0-4.5 4.5m4.5-4.5 4.5 4.5"/>
                            </svg>
                            <span>№{ ratingPosition }</span>
                        </div>

                        <div className='info'>
                            <div className='title-container'>
                                <div className='title'>{ title }</div>
                                <div className='verified-label'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                                        <path fill="#0135B3" fillRule="evenodd" d="M7.819 1.906A5.527 5.527 0 0 1 12 0c1.67 0 3.167.74 4.18 1.906a5.527 5.527 0 0 1 4.306 1.609 5.527 5.527 0 0 1 1.608 4.304A5.527 5.527 0 0 1 24 12c0 1.67-.74 3.167-1.906 4.181a5.527 5.527 0 0 1-1.609 4.304 5.527 5.527 0 0 1-4.304 1.609A5.527 5.527 0 0 1 12 24c-1.67 0-3.167-.74-4.18-1.906a5.527 5.527 0 0 1-4.306-1.609 5.527 5.527 0 0 1-1.608-4.304A5.527 5.527 0 0 1 0 12c0-1.67.74-3.166 1.906-4.18a5.527 5.527 0 0 1 1.609-4.305 5.527 5.527 0 0 1 4.304-1.609Zm8.624 7.861a.923.923 0 1 0-1.502-1.073L10.96 14.27 8.96 12.27a.923.923 0 1 0-1.305 1.306l2.77 2.769a.923.923 0 0 0 1.403-.116l4.615-6.462Z" clipRule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                            
                            <div className='location-and-sport-types'>
                                <div className='location'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" stroke="#9395B8" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.667" fill="none">
                                        <path d="M17.5 8.332c0 5.833-7.5 10.833-7.5 10.833s-7.5-5-7.5-10.833a7.5 7.5 0 0 1 15 0Z"/>
                                        <path d="M10 10.832a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                    </svg>
                                    <span>{ location }</span>
                                </div>
                                <div className='dot'/>
                                { sportTypes.map((title: string, index: number) => (
                                    <Fragment key={ index }>
                                        { index ? <div className='dot'/> : null }
                                        <span>{ title }</span>
                                    </Fragment>
                                ))}
                                
                            </div>

                            <div className='human-resources'>
                                <div className='athletes-info'>
                                    <div className='imgs'>
                                        { athletIds.slice(0, 3).map((id: number, idx: number) => idx < 2
                                                ? <div className='img-container' key={ id }>
                                                    <img src={ `/pict/athletes/${id}.png` }/>
                                                </div>
                                                : <img src={ `/pict/athletes/${id}.png` } key={ id }/>
                                        )}
                                    </div>
                                    <div className='people-counter'>
                                        <span>{ athletIds.length }</span>
                                        <span>Спортсменов</span>
                                    </div>
                                </div>

                                <div className='dot'/>
                                
                                <div className='subscribers-info people-counter'>
                                    <span>{ nSubscribers }</span>
                                    <span>Подписчиков</span>
                                </div>
                                
                                <div className='dot'/>

                                <div className='teams-info'>
                                    
                                    <div className='initials'>
                                        { teams.slice(0, 3).map((team: any, idx: number) => (
                                            <div className='container' key={ idx }>
                                                <div
                                                    style={{
                                                        backgroundColor: team?.color,
                                                    }}
                                                    key={ team?.id }
                                                >
                                                    { team?.initials }
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className='people-counter'>
                                        <span>{ teams.length }</span>
                                        <span>Команд</span>
                                    </div>
                                </div>
                            </div>

                            <div className='awards'>
                                <div className='gold'>
                                    <span>{ gold }</span>
                                </div>
                                <div className='silver'>
                                    <span>{ silver }</span>
                                </div>
                                <div className='bronze'>
                                    <span>{ bronze }</span>
                                </div>
                            </div>
                        </div>

                        <div className='actions'>
                            <Button 
                                kind='primary'
                                text='Подписаться'
                                isLoading={ isSubscribing }
                                onClick={() => {
                                    if(!isSubscribing && hhLink) {
                                        window.open(hhLink, '_blank')
                                        return
                                    }
                                    setIsSubscribing(!isSubscribing)
                                }}
                            />
                            <Button 
                                kind='secondary'
                                text='Подробнее'
                                isLoading={ isGettingMore }
                                onClick={() => {
                                    if(!isGettingMore && hhLink) {
                                        window.open(hhLink, '_blank')
                                        return
                                    }
                                    setIsGettingMore(!isGettingMore)
                                }}
                            />
                            <Button 
                                kind='secondary'
                                icon='share'
                                isLoading={ isSharing }
                                onClick={() => setIsSharing(!isSharing)}
                            />
                            <div className='space'/>
                            <Button 
                                kind='secondary'
                                icon='instagram'
                                className='social-media'
                                isLoading={ isInstagramming }
                                onClick={() => setIsInstagramming(!isInstagramming)}
                            />
                            <Button 
                                kind='secondary'
                                icon='vk'
                                className='social-media'
                                isLoading={ isVKing }
                                onClick={() => setIsVKing(!isVKing)}
                            />
                            <Button 
                                kind='secondary'
                                icon='telegram'
                                className='social-media'
                                isLoading={ isTelegramming }
                                onClick={() => {
                                    if(!isTelegramming && telegramLink) {
                                        window.open(telegramLink, '_blank')
                                        return
                                    }
                                    setIsTelegramming(!isTelegramming)
                                }}
                            />
                        </div>
                        <div className='lower-space'/>
                        <div className='tabs'>
                            <TabButton
                                text='Соревнования'
                                isActive={ isCompetitions }
                                onClick={ () => setIsCompetitions(true) }
                            />
                            <TabButton
                                text='Новости'
                                isActive={ !isCompetitions }
                                onClick={ () => setIsCompetitions(false) }
                            />
                        </div>
                    </div>
                </div>
    );
};

export default OrganizationHeaderView
