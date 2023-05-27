import React from 'react'
import MainLayout from '../layouts/MainLayout';
import GenericTabs from '../components/tabs/GenericTabs';
import GiveJobFormTabSegment from '../components/tabs/form/GiveJobFormTabSegment';

const MyFormsPage = () => {
    const tabs = [
        {
          key: '1',
          title: 'Ekibe Katıl',
          component: (
            <h2>hello sorular</h2>
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
            <h2>ayarlar</h2>
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