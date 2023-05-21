import React from 'react'
import MainLayout from '../layouts/MainLayout'
import HeaderSections from '../components/sections/HeaderSections'
import ProjectList from '../components/list/ProjectList'
import ProfileSections from '../components/sections/ProfileSections'
import ProjectPagination from '../components/pagination/ProjectPagination'

const HomePage = () => {
  return (
   <MainLayout>
    <HeaderSections />

        <ProjectList />
 

   </MainLayout>
  )
}

export default HomePage