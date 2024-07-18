import './styles.scss'
import Placeholder from './placeholder'

interface OrganizationHeaderViewProps {
    isLoading?: boolean,
}

interface Team {
    id: number,
    color: string,
    initials: string
}


const OrganizationHeaderView = ({
    isLoading,
} : OrganizationHeaderViewProps
) => {
    const randomRGB = () => 'rgb(' + [...Array(3)].map(_u => {
        return Math.floor(Math.random() * 256)
    }).join(', ') + ')';

    const randomInitials = () =>  [...Array(2)].map(_u => {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        return chars.charAt(Math.floor(Math.random() * chars.length))
    }).join('');

    const response = {
        title: 'Региональная общественная организация "Федерация спорта Алтайского края"',
        imgPath: '/altay.png',
        country: 'rus',
        location: 'Алтайский край',
        sportTypes: ['Грэпплинг', 'Греко-римская борьба', 'Пляжная борьба'],
        ratingPosition: 2,
        athletIds: [...Array(45)].map((_u, i) => i),
        nSubscribers: 125,
        teams: [...Array(12)].map((_u, i) => ({
            id: i,
            color: randomRGB(),
            initials: randomInitials()
        })),
        awards: [12, 4, 19] as const
    }
    const response2 = {
        title: 'Попов Александр Александрович',
        imgPath: 'https://img.hhcdn.ru/photo/758390667.jpeg?t=1721314518&h=zHHiveEpkMloflMZSijFUA',
        country: 'rus',
        location: 'Алтайский край',
        sportTypes: ['Грэпплинг', 'Греко-римская борьба', 'Пляжная борьба'],
        ratingPosition: 2,
        athletIds: [...Array(45)].map((_u, i) => i),
        nSubscribers: 125,
        teams: [...Array(12)].map((_u, i) => ({
            id: i,
            color: randomRGB(),
            initials: randomInitials()
        })),
        awards: [12, 4, 19] as const
    }

    const { title,
            imgPath,
            country,
            location,
            sportTypes,
            ratingPosition,
            athletIds,
            nSubscribers,
            teams,
            awards } = response

    const [ gold, silver, bronze ] = awards || [];

    return (
        isLoading
            ?   <Placeholder/>
            :   <div className='organization-header'>

                    <div className='avatar'>
                        <img src={ imgPath }/>
                        <div className='rus flag'>
                            <div/><div/><div/>
                        </div>
                    </div>

                    <div className='header'/>

                    <div className='body'>
                        <div className='rating-tag'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none">
                                <path stroke="#31C16B" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M9 14.996v-12m0 0-4.5 4.5m4.5-4.5 4.5 4.5"/>
                            </svg>
                            <span>№{ ratingPosition }</span>
                        </div>

                        <div className='info'>
                            <div className='title-container'>
                                <div className='title'>{ title }</div>
                                <div className='verified-label'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none">
                                        <path fill="#0135B3" fill-rule="evenodd" d="M7.819 1.906A5.527 5.527 0 0 1 12 0c1.67 0 3.167.74 4.18 1.906a5.527 5.527 0 0 1 4.306 1.609 5.527 5.527 0 0 1 1.608 4.304A5.527 5.527 0 0 1 24 12c0 1.67-.74 3.167-1.906 4.181a5.527 5.527 0 0 1-1.609 4.304 5.527 5.527 0 0 1-4.304 1.609A5.527 5.527 0 0 1 12 24c-1.67 0-3.167-.74-4.18-1.906a5.527 5.527 0 0 1-4.306-1.609 5.527 5.527 0 0 1-1.608-4.304A5.527 5.527 0 0 1 0 12c0-1.67.74-3.166 1.906-4.18a5.527 5.527 0 0 1 1.609-4.305 5.527 5.527 0 0 1 4.304-1.609Zm8.624 7.861a.923.923 0 1 0-1.502-1.073L10.96 14.27 8.96 12.27a.923.923 0 1 0-1.305 1.306l2.77 2.769a.923.923 0 0 0 1.403-.116l4.615-6.462Z" clip-rule="evenodd"/>
                                    </svg>
                                </div>
                            </div>
                            
                            <div className='location-and-sport-types'>
                                <div className='location'>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none">
                                        <g stroke="#9395B8" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.667" clip-path="url(#a)">
                                            <path d="M17.5 8.332c0 5.833-7.5 10.833-7.5 10.833s-7.5-5-7.5-10.833a7.5 7.5 0 0 1 15 0Z"/>
                                            <path d="M10 10.832a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"/>
                                        </g>
                                        <defs>
                                            <clipPath id="a">
                                                <path fill="#fff" d="M0 0h20v20H0z"/>
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>{ location }</span>
                                </div>
                                <div className='dot'/>
                                { sportTypes.map((title, index) => <>
                                    { index ? <div className='dot'/> : null }
                                    <span>{ title }</span>
                                </>
                                )}
                                
                            </div>

                            <div className='human-resources'>
                                <div className='athletes-info'>
                                    <div className='imgs'>
                                        { athletIds.slice(0, 3).map((id, idx) => idx < 2
                                                ? <div className='img-container'>
                                                    <img src={ `/athletes/${id}.png` } key={ id }/>
                                                </div>
                                                : <img src={ `/athletes/${id}.png` } key={ id }/>
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
                                        { teams.slice(0, 3).map(team => (
                                            <div className='container'>
                                                <div
                                                    style={{
                                                        backgroundColor: team.color,
                                                    }}
                                                    key={ team.id }
                                                >
                                                    { team.initials }
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
                                { gold && (
                                    <div className='gold'>
                                        <span>{ gold }</span>
                                    </div>
                                )}
                                { silver && (
                                    <div className='silver'>
                                        <span>{ silver }</span>
                                    </div>
                                )}
                                { bronze && (
                                    <div className='bronze'>
                                        <span>{ bronze }</span>
                                    </div>
                                )}
                            </div>
                        </div>

                        <div className='actions'></div>
                        <div className='tabs'></div>
                    </div>
                </div>
    );
};

export default OrganizationHeaderView;