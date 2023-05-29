import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteUserGiveJobForms, GetCities, GetUserGiveJobForms } from '../../../redux/actions/FormActions'
import FormInfoCard from '../../cards/FormInfoCard'
import EmptyResult from '../../result/EmptyResult'
import { message } from 'antd'
import { DELETE_FORM_RESET } from '../../../redux/constants/FormConstants'
import LoadingSpinner from '../../spinner/LoadingSpinner'

const GiveJobFormTabSegment = () => {
    const auth = useSelector((state) => state.auth)
    const deleteUpdateUserForms = useSelector((state) => state.form.deleteUpdateUserForms)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetUserGiveJobForms(auth.user._id))
        if (deleteUpdateUserForms.isDeleted) {
            message.success(deleteUpdateUserForms.message)
            dispatch({type : DELETE_FORM_RESET})
        }
    }, [dispatch,auth,deleteUpdateUserForms.isDeleted])
    

    const getUserGiveJobForms = useSelector((state) => state.form.getUserGiveJobForms)

    const handleDeleteGiveJobForm = (formId) => {
        dispatch(DeleteUserGiveJobForms(formId))
    }

    useEffect(() => {
        dispatch(GetCities())
    }, [dispatch])

  return (
    <Fragment>
     
        {getUserGiveJobForms.loading ? <LoadingSpinner /> :  getUserGiveJobForms.forms.length === 0 ? <EmptyResult /> : getUserGiveJobForms.forms.map((form) => (
            <FormInfoCard  isGiveJobForm={true} handleDeleteGiveJobForm={handleDeleteGiveJobForm} key={form._id} form={form} />
        ))}
    </Fragment>
  ) 
}

export default GiveJobFormTabSegment