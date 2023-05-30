import React, { Fragment, useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import ProjectIdeaForm from '../components/forms/ProjectIdeaForm'
import GenericFormTitle from '../components/forms/formtitle/GenericFormTitle'
import { useDispatch, useSelector } from 'react-redux'
import { SendProjectIdeaForm } from '../redux/actions/FormActions'
import { SEND_FORM_RESET } from '../redux/constants/FormConstants'
import { useNavigate } from 'react-router-dom'
import SuccessResult from '../components/result/SuccessResult'
import FormButton from '../components/button/FormButton'

const ProjectIdeaFormPage = () => {

  const auth = useSelector((state) => state.auth)

  const [user, setUser] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [projectIdea, setProjectIdea] = useState("")

  const dispatch = useDispatch()
  const handleSendForm = () => {
    dispatch(SendProjectIdeaForm({user,firstname,lastname,email,phoneNumber,projectIdea}))
  }
  useEffect(() => {
    if (auth.authenticate) {
      setUser(auth.user._id)
    }
  }, [auth])
  const sendForm = useSelector((state) => state.form.sendForm);
  const navigate = useNavigate()
  
  const handleSendAnotherForm = () => {
    dispatch({ type: SEND_FORM_RESET });
    setFirstname("")
    setLastname("")
    setEmail("")
    setPhoneNumber("")
    setProjectIdea("")

  };

  return (
   <MainLayout>
   {sendForm.success ? (
        <SuccessResult
          buttonComp={
            <div className="d-flex flex-row  justify-between gap-x-10">
               <FormButton
              
              title="Formlarıma Git"
              onClick={() => navigate("/my-forms", { replace: true })}
            />
             <FormButton
              title="Yeni Form Gönder"
              onClick={handleSendAnotherForm}
            />
            </div>
          }
        />
      ) : (
        <Fragment>

<GenericFormTitle title="Yeni Proje Fikri Formu" content="Bize yeni proje fikirleri vererek  proje fikrinizden elde edilen kara ortak olabilirsiniz " />
          <ProjectIdeaForm isEditForm={false} handleSendForm={handleSendForm} firstname={firstname} setFirstname={setFirstname} lastname={lastname} setLastname={setLastname} email={email} setEmail={setEmail} phoneNumber={phoneNumber} setPhoneNumber={setPhoneNumber} projectIdea={projectIdea} setProjectIdea={setProjectIdea}  />
        </Fragment>
      )
      }
   
   </MainLayout>
  )
}

export default ProjectIdeaFormPage