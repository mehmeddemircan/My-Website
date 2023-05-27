import React, { Fragment, useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import GiveJobForm from "../components/forms/GiveJobForm";
import EmptyResult from "../components/result/EmptyResult";
import SuccessResult from "../components/result/SuccessResult";
import { Rate, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { GetCities, SendGiveJobForm } from "../redux/actions/FormActions";
import { SEND_GIVE_JOB_FORM_RESET } from "../redux/constants/FormConstants";
import FormButton from "../components/button/FormButton";
import { useNavigate } from "react-router-dom";

const GiveJobFormPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetCities());
  }, [dispatch]);

  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [city, setCity] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");

  useEffect(() => {
    if (auth.authenticate) {
      setUser(auth.user._id);
    }
  }, [auth, auth.authenticate]);

  const handleSendForm = () => {
    dispatch(
      SendGiveJobForm({
        user,
        firstname,
        lastname,
        email,
        phoneNumber,
        companyName,
        city,
        additionalInfo,
      })
    );
  };
  const sendGiveJobForm = useSelector((state) => state.form.sendGiveJobForm);

  const handleSendAnotherForm = () => {
    dispatch({ type: SEND_GIVE_JOB_FORM_RESET });
    setFirstname("")
    setLastname("")
    setCompanyName("")
    setEmail("")
    setPhoneNumber("")
    setCity("")
    setAdditionalInfo("")
  };
  const navigate = useNavigate();
  return (
    <MainLayout>
      {sendGiveJobForm.success ? (
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

<div className="mx-auto max-w-2xl text-center mt-3">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">İş Teklif Formu</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
         İş Teklifinde bulunarak , kendi önemli gördüğünüz işleri yaptırabilirsiniz
        </p>
      </div>
      <GiveJobForm
          isEditForm = {false}
          user={user}
          firstname={firstname}
          setFirstname={setFirstname}
          lastname={lastname}
          setLastname={setLastname}
          email={email}
          setEmail={setEmail}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          companyName={companyName}
          setCompanyName={setCompanyName}
          city={city}
          setCity={setCity}
          additionalInfo={additionalInfo}
          setAdditionalInfo={setAdditionalInfo}
          handleSendForm={handleSendForm}
        />
        </Fragment>
      
      )}
    </MainLayout>
  );
};

export default GiveJobFormPage;
