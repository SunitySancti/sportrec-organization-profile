import './styles.scss'
import ReorderableLayout from 'layouts/ReorderableLayout'
import Achievements from './organisms/Achievements'
import Athletes from './organisms/Athletes'
import Coaches from './organisms/Coaches'
import Competitions from './organisms/Competitions'
import MultiMedia from './organisms/MultiMedia'
import OrganizationHeader from './organisms/OrganizationHeader'
import OrganizationManagement from './organisms/OrganizationManagement'
import OrganizationRating from './organisms/OrganizationRating'
import EventBlock from './organisms/EventBlock'


// size config
const minimalWorthWidth = 378;
const padding = 20;
const leftColumnMinWidth = minimalWorthWidth - padding * 2;
const leftColumnMaxWidth = 765;
const rightColumnMinWidth = leftColumnMinWidth;
const rightColumnMaxWidth = leftColumnMinWidth;


const OrganizationPageView = () => {
    return (
        <div className='organization-page'>
            <EventBlock style={{
                minWidth: leftColumnMinWidth,
                maxWidth: leftColumnMaxWidth + padding + rightColumnMaxWidth,
            }}/>
            <ReorderableLayout {...{
                ordering: {
                    double: [[0, 4, 7], [1, 3, 5, 6, 2]]
                },
                limits: {
                    leftColumn: [leftColumnMinWidth, leftColumnMaxWidth],
                    rightColumn: [rightColumnMinWidth, rightColumnMaxWidth]
                },
                gap: padding
            }}>
                <OrganizationHeader/>
                <OrganizationRating/>
                <Achievements/>
                <OrganizationManagement/>
                <Competitions/>
                <Athletes/>
                <Coaches/>
                <MultiMedia/>
            </ReorderableLayout>
        </div>
    );
};

export default OrganizationPageView;