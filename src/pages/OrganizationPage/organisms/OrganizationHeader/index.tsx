import OrganizationHeaderView from './view.tsx'
import { useParams } from 'react-router-dom'


const randomRGB = () => 'rgb(' + [...Array(3)].map(_u => {
    return Math.floor(Math.random() * 256)
}).join(', ') + ')';

const randomInitials = () =>  [...Array(2)].map(_u => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    return chars.charAt(Math.floor(Math.random() * chars.length))
}).join('');


const OrganizationHeader = () => {
    const { organizationId } = useParams();

    const response = organizationId === 'Alex'
        ?   {
                title: 'Попов Александр Александрович',
                imgPath: 'https://img.hhcdn.ru/photo/758390667.jpeg?t=1721314518&h=zHHiveEpkMloflMZSijFUA',
                country: 'rus',
                location: 'Москва',
                sportTypes: ['React', 'Redux', 'Typescript', 'Express'],
                ratingPosition: 1,
                athletIds: [],
                nSubscribers: 0,
                teams: [],
                awards: [2, 0, 0] as const,
                hhLink: 'https://hh.ru/resume/ae6dcea4ff0201f0130039ed1f7a307934436a',
                telegramLink: 'https://t.me/SunitySancti'
            }
        :   {
                title: 'Региональная общественная организация "Федерация спорта Алтайского края"',
                imgPath: '/pict/altay.png',
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

    return (
        <OrganizationHeaderView {...{
            response
        }}/>
    );
};

export default OrganizationHeader;