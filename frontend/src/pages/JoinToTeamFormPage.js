import React, { Fragment, useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import JoinToTeamForm from '../components/forms/JoinToTeamForm'
import { useDispatch, useSelector } from 'react-redux'
import { SendTeamForm } from '../redux/actions/FormActions'
import SuccessResult from '../components/result/SuccessResult'
import FormButton from '../components/button/FormButton'
import { useNavigate } from 'react-router-dom'
import GenericFormTitle from '../components/forms/formtitle/GenericFormTitle'
import { SEND_FORM_RESET } from '../redux/constants/FormConstants'

const JoinToTeamFormPage = () => {

  const [user, setUser] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [staticDepartments, setStaticDepartments] = useState(["Backend","Frontend","UI/UX Designer","Mobile Developer","Database Manager","Network Manager"])
  const [departments, setDepartments] = useState([])
  const [additionalInfo, setAdditionalInfo] = useState("")

  const auth = useSelector((state) => state.auth)
  useEffect(() => {
    if (auth.authenticate) {
      setUser(auth.user._id)
    }
  }, [auth])
  const dispatch = useDispatch()
  const handleSendForm = () => {
    dispatch(SendTeamForm({user,firstname,lastname,email,phoneNumber,departments,additionalInfo}))
  }
  const sendForm = useSelector((state) => state.form.sendForm);
  const navigate = useNavigate()
  
  const handleSendAnotherForm = () => {
    dispatch({ type: SEND_FORM_RESET });
    setFirstname("")
    setLastname("")
    setDepartments([])
    setEmail("")
    setPhoneNumber("")
 
    setAdditionalInfo("")
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
 <GenericFormTitle title="Ekibe Katıl Formu" content="Bizim ekibimize katılarak , yeni projelere dahil olarak kendinizi geliştirebilirsiniz" />
        <JoinToTeamForm 
        isEditForm={false}
        staticDepartments={staticDepartments}
        firstname={firstname}
        setFirstname={setFirstname}
        lastname={lastname}
        setLastname={setLastname}
        email={email}
        setEmail={setEmail}
        phoneNumber={phoneNumber}
        setPhoneNumber={setPhoneNumber}
        departments={departments}
        setDepartments={setDepartments}
        additionalInfo={additionalInfo}
        setAdditionalInfo={setAdditionalInfo}
        handleSendForm={handleSendForm}
      />
        </Fragment>
       
      )
      }
    </MainLayout>
  )
}

export default JoinToTeamFormPage