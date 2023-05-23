import React from 'react'
import MainLayout from '../layouts/MainLayout'
import GiveJobForm from '../components/forms/GiveJobForm'
import EmptyResult from '../components/result/EmptyResult'
import SuccessResult from '../components/result/SuccessResult'
import { Rate } from 'antd'

const GiveJobFormPage = () => {
  return (
    <MainLayout>

            <GiveJobForm />
    </MainLayout>
  )
}

export default GiveJobFormPage