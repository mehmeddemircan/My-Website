import React from 'react'
import MainLayout from '../layouts/MainLayout'
import ProfileSections from '../components/sections/ProfileSections'

const CVPage = () => {
  return (
    <MainLayout>
        <div className='container mx-auto my-5'>
            <ProfileSections />
        </div>
    </MainLayout>
  )
}

export default CVPage