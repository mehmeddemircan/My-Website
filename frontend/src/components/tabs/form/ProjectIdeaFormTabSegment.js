import React, { Fragment, useEffect } from 'react'
import { DeleteProjectIdeaForms, GetProjectIdeaForms } from '../../../redux/actions/FormActions'
import { message } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { DELETE_FORM_RESET, DELETE_PROJECT_IDEA_FORM_RESET } from '../../../redux/constants/FormConstants'
import LoadingSpinner from '../../spinner/LoadingSpinner'
import EmptyResult from '../../result/EmptyResult'
import FormInfoCard from '../../cards/FormInfoCard'


const ProjectIdeaFormTabSegment = () => {

    const auth = useSelector((state) => state.auth)
    const deleteUpdateUserProjectIdeaForms = useSelector((state) => state.form.deleteUpdateUserProjectIdeaForms)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(GetProjectIdeaForms(auth.user._id))
        if (deleteUpdateUserProjectIdeaForms.isDeleted) {
            message.success(deleteUpdateUserProjectIdeaForms.message)
            dispatch({type : DELETE_PROJECT_IDEA_FORM_RESET})
        }
    }, [dispatch,auth,deleteUpdateUserProjectIdeaForms.isDeleted])
    

    const getUserProjectIdeaForms = useSelector((state) => state.form.getUserProjectIdeaForms)

    const handleDeleteProjectIdeaForm = (formId) => {
        dispatch(DeleteProjectIdeaForms(formId))
    }

  return (
        <Fragment>
            {getUserProjectIdeaForms.loading ? <LoadingSpinner /> :  getUserProjectIdeaForms.forms.length === 0 ? <EmptyResult /> : getUserProjectIdeaForms.forms.map((form) => (
        <FormInfoCard  isProjectIdea={true} handleDeleteProjectIdeaForm={handleDeleteProjectIdeaForm} key={form._id} form={form} />
    ))}
        </Fragment>
  )
}

export default ProjectIdeaFormTabSegment