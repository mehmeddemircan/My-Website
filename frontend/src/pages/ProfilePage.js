import React, { useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import ProfileForm from '../components/forms/ProfileForm'
import UserProfileCard from '../components/cards/UserProfileCard'
import { useDispatch, useSelector } from 'react-redux'
import { GetProfile, UpdateProfile } from '../redux/actions/UserActions'
import { message } from 'antd'
import { UPDATE_PROFILE_RESET } from '../redux/constants/UserConstants'

const ProfilePage = () => {

  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)
  const getProfile = useSelector((state) => state.user.getProfile)
  const updateProfile = useSelector((state) => state.user.updateProfile)
  useEffect(() => {
      dispatch(GetProfile())
      if (updateProfile.success) {
        message.success(updateProfile.message)
        dispatch({type : UPDATE_PROFILE_RESET})
      }
  }, [dispatch,updateProfile.success])

  useEffect(() => {
    setFirstname(getProfile.user.firstname)
    setLastname(getProfile.user.lastname)
    setEmail(getProfile.user.email)
    setStatus(getProfile.user.status)
    setCity(getProfile.user.city)
    setBiografy(getProfile.user.biografy)
    setCompany(getProfile.user.company)
  }, [getProfile])

  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [statuses, setStatuses] = useState(["On Vacation","Working from home","Out Sick","Focusing"])
  const [status, setStatus] = useState("")
  const [city, setCity] = useState("")
  const [biografy, setBiografy] = useState("")
  const [company, setCompany] = useState("")
  const handleUpdateProfile = () => {
    dispatch(UpdateProfile({firstname,lastname,email,status,city,biografy,company}))
  }



  return (
    <MainLayout>
        <div className='container mx-auto'>
    
        <div className='row'>
        <div className='col-md-4 col-sm-12'>
        <UserProfileCard />
      
        </div>
        <div className='col-md-8 col-sm-12'>
        <ProfileForm company={company} setCompany={setCompany} biografy={biografy} setBiografy={setBiografy} city={city} setCity={setCity} status={status} setStatus={setStatus} statuses={statuses}  handleUpdateProfile={handleUpdateProfile} firstname={firstname} setFirstname={setFirstname} lastname={lastname} setLastname={setLastname} email={email} setEmail={setEmail} />
      
        </div>
        </div>
        </div>
    </MainLayout>
  )
}

export default ProfilePage