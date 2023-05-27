import { Descriptions, List, Tooltip } from "antd";
import React, { Fragment, useEffect, useState } from "react";
import UpdateFormModal from "../modal/form/UpdateFormModal";
import { useDispatch, useSelector } from "react-redux";
import GiveJobForm from "../forms/GiveJobForm";

const FormInfoCard = ({ handleDeleteGiveJobForm, form }) => {


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
                  className="btn btn-outline-success rounded-pill mx-1"
                  onClick={handleShowUpdateFormModal}
                >
                  Düzenle
                </button>
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

                <Tooltip title="Delete">
                  <button
                    className="btn btn-light"
                    onClick={() => handleDeleteGiveJobForm(form._id)}
                  >
                    <i class="fa-solid fa-trash"></i>
                  </button>
                </Tooltip>
              </div>
            </div>
          }
        >
          <Descriptions.Item label="Name"></Descriptions.Item>
          <Descriptions.Item label="Telephone"></Descriptions.Item>
          <Descriptions.Item label="Email"></Descriptions.Item>
        </Descriptions>
      </List.Item>
    </Fragment>
  );
};

export default FormInfoCard;
