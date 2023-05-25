import React from 'react'
import MainLayout from '../layouts/MainLayout'
import ProfileForm from '../components/forms/ProfileForm'
import UserProfileCard from '../components/cards/UserProfileCard'

const ProfilePage = () => {
  return (
    <MainLayout>
        <div className='container mx-auto'>
    
        <div className='row'>
        <div className='col-md-4 col-sm-12'>
        <UserProfileCard />
      
        </div>
        <div className='col-md-8 col-sm-12'>
        <ProfileForm />
      
        </div>
        </div>
        </div>
    </MainLayout>
  )
}

export default ProfilePage