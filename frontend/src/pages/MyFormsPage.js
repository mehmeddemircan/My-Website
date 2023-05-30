import React from 'react'
import MainLayout from '../layouts/MainLayout';
import GenericTabs from '../components/tabs/GenericTabs';
import GiveJobFormTabSegment from '../components/tabs/form/GiveJobFormTabSegment';
import TeamFormTabSegment from '../components/tabs/form/TeamFormTabSegment';
import ProjectIdeaFormTabSegment from '../components/tabs/form/ProjectIdeaFormTabSegment';

const MyFormsPage = () => {
    const tabs = [
        {
          key: '1',
          title: 'Ekibe Katıl',
          component: (
            <TeamFormTabSegment />
          ),
        },
        {
          key: '2',
          title: 'İş Fikrinde Bulun',
          component: (
           <GiveJobFormTabSegment />
          ),
        },
        {
          key: '3',
          title: 'Proje Fikir',
          component: (
              <ProjectIdeaFormTabSegment />
          )
        },
      
      ];
  return (
    <MainLayout>
   
         <GenericTabs tabs={tabs} />
    </MainLayout>
  )
}

export default MyFormsPage