import { Descriptions, List, Tag, Tooltip } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import UpdateFormModal from "../modal/form/UpdateFormModal";
import { useDispatch, useSelector } from "react-redux";
import GiveJobForm from "../forms/GiveJobForm";
import JoinToTeamForm from "../forms/JoinToTeamForm";

const FormInfoCard = ({ isGiveJobForm,isTeamForm,handleDeleteTeamForm,handleDeleteGiveJobForm, form }) => {


  const [showUpdateFormModal, setShowUpdateFormModal] = useState(false);
  const handleShowUpdateFormModal = () => {
    setShowUpdateFormModal(true);
   
  };
  const handleCloseUpdateFormModal = () => {
    setShowUpdateFormModal(false);
  };

  const auth = useSelector((state) => state.auth);
  const [user, setUser] = useState("");
  const [firstname, setFirstname] = useState(form.firstname);
  const [lastname, setLastname] = useState(form.lastname);
  const [email, setEmail] = useState(form.email);
  const [phoneNumber, setPhoneNumber] = useState(form.phoneNumber);
  const [companyName, setCompanyName] = useState(form.companyName);
  const [city, setCity] = useState(form.city);
  const [additionalInfo, setAdditionalInfo] = useState(form.additionalInfo);
// team Forms 
const [staticDepartments, setStaticDepartments] = useState(["Backend","Frontend","UI/UX Designer","Mobile Developer","Database Manager","Network Manager"])
const [departments, setDepartments] = useState(form.departments)

  useEffect(() => {
    if (auth.authenticate) {
      setUser(auth.user._id);
    }
  }, [auth, auth.authenticate]);

  return (
    <Fragment>
      <List.Item key={form._id} className="card my-3 px-2">
        <Descriptions
          title={
            <div className="d-flex justify-content-between my-3">
              <a>User Info</a>{" "}
              <div>
                <button
                  className="btn btn-outline-primary rounded-pill mx-1"
                  onClick={handleShowUpdateFormModal}
                >
                  Düzenle
                </button>
                {isTeamForm && (
                   <UpdateFormModal
                   showUpdateFormModal={showUpdateFormModal}
                   handleCloseUpdateFormModal={handleCloseUpdateFormModal}
                 >
                      <JoinToTeamForm 
        isEditForm={true}
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
        // handleSendForm={handleSendForm}
      />
                 </UpdateFormModal>
                )}
                {isGiveJobForm && (
                  <UpdateFormModal
                  showUpdateFormModal={showUpdateFormModal}
                  handleCloseUpdateFormModal={handleCloseUpdateFormModal}
                >
                  <GiveJobForm
                    isEditForm={true}
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
                    //   handleSendForm={handleSendForm}
                  />
                </UpdateFormModal>
                )}
                

                <Tooltip title="Delete">
                  <button
                    className="btn btn-light"
                    onClick={() => isGiveJobForm ?  handleDeleteGiveJobForm(form._id) : isTeamForm ? handleDeleteTeamForm(form._id) : null}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </Tooltip>
              </div>
            </div>
          }
        >
          <Descriptions.Item label="İsim">{form.firstname}</Descriptions.Item>
          <Descriptions.Item label="Soyisim">{form.lastname}</Descriptions.Item>
          <Descriptions.Item label="Telephone">{form?.phoneNumber}</Descriptions.Item>
          <Descriptions.Item label="Email">{form.email}</Descriptions.Item>
          {isGiveJobForm  &&   (
            <>
               <Descriptions.Item label="Email">{form.companyName}</Descriptions.Item>
            <Descriptions.Item label="Email">{form?.city}</Descriptions.Item>
            </>
         
          ) }
          {
            isTeamForm  &&  <Descriptions.Item label="Calışmak İstediğiniz bölümler">{form.departments.map((department) => <Tag color="#108ee9">{department}</Tag>)}</Descriptions.Item>
          }
        </Descriptions>
      </List.Item>
    </Fragment>
  );
};

export default FormInfoCard;
