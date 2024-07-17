
import ReorderableLayout from 'layouts/ReorderableLayout'
import Achievements from './organisms/Achievements'
import Athletes from './organisms/Athletes'
import Coaches from './organisms/Coaches'
import Competitions from './organisms/Competitions'
import MultiMedia from './organisms/MultiMedia'
import OrganizationHeader from './organisms/OrganizationHeader'
import OrganizationManagement from './organisms/OrganizationManagement'
import OrganizationRating from './organisms/OrganizationRating'


const OrganizationPageView = () => {
    return (
        <>
            <ReorderableLayout {...{
                ordering: {
                    double: [[0, 4, 7], [1, 3, 5, 6, 2]]
                },
                limits: {
                    leftColumn: [371, 765],
                    rightColumn: [371, 371]
                }
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
        </>
    );
};

export default OrganizationPageView;