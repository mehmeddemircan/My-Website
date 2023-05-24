import React from 'react'
import MainLayout from "../layouts/MainLayout";
import TemplateCard from '../components/cards/TemplateCard';
import CustomPagination from '../components/pagination/CustomPagination';
const TemplatesPage = () => {
  return (
   <MainLayout>
        <div className='container mx-auto'>
            <div className='flex flex-wrap justify-center flex-1'>
            <TemplateCard />
            <TemplateCard />
            <TemplateCard />
            <TemplateCard />
            <TemplateCard />
            <TemplateCard />
            <TemplateCard />
            <TemplateCard />
            </div>
        </div>
    
   </MainLayout>
  )
}

export default TemplatesPage