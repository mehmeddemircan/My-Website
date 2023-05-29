import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteUserTeamForms, GetUserTeamForms } from '../../../redux/actions/FormActions'
import FormInfoCard from '../../cards/FormInfoCard'
import LoadingSpinner from '../../spinner/LoadingSpinner'
import EmptyResult from '../../result/EmptyResult'
import { message } from 'antd'
import { DELETE_FORM_RESET } from '../../../redux/constants/FormConstants'

const TeamFormTabSegment = () => {

    const dispatch = useDispatch()
    const getUserTeamForms = useSelector((state) => state.form.getUserTeamForms)
    const deleteUpdateUserForms = useSelector((state) => state.form.deleteUpdateUserForms)
    const auth = useSelector((state) => state.auth)
    useEffect(() => {
        dispatch(GetUserTeamForms(auth.user._id))
        if (deleteUpdateUserForms.isDeleted) {
            message.success(deleteUpdateUserForms.message)
            dispatch({type : DELETE_FORM_RESET})
        }
    }, [dispatch,auth,deleteUpdateUserForms.isDeleted])

    const handleDeleteTeamForm = (formId) => {
        dispatch(DeleteUserTeamForms(formId))
    }

  return (
    <Fragment>
     
        {getUserTeamForms.loading ? <LoadingSpinner /> :  getUserTeamForms.forms.length === 0 ? <EmptyResult /> : getUserTeamForms.forms.map((form) => (
            <FormInfoCard  isTeamForm={true}  handleDeleteTeamForm={handleDeleteTeamForm} key={form._id} form={form} />
        ))}
    </Fragment>
  )
}

export default TeamFormTabSegment