import React, { Fragment, useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import ProfileForm from "../components/forms/ProfileForm";
import UserProfileCard from "../components/cards/UserProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { GetProfile, UpdateProfile } from "../redux/actions/UserActions";
import { message } from "antd";
import { UPDATE_PROFILE_RESET } from "../redux/constants/UserConstants";
import Resizer from "react-image-file-resizer";
import axios from 'axios'
import LoadingSpinner from "../components/spinner/LoadingSpinner";
const ProfilePage = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const getProfile = useSelector((state) => state.user.getProfile);
  const updateProfile = useSelector((state) => state.user.updateProfile);
  useEffect(() => {
    dispatch(GetProfile());
    if (updateProfile.success) {
      message.success(updateProfile.message);
      dispatch({ type: UPDATE_PROFILE_RESET });
    }
  }, [dispatch, updateProfile.success]);

  useEffect(() => {
    setFirstname(getProfile.user.firstname);
    setLastname(getProfile.user.lastname);
    setEmail(getProfile.user.email);
    setStatus(getProfile.user.status);
    setCity(getProfile.user.city);
    setBiografy(getProfile.user.biografy);
    setCompany(getProfile.user.company);
    setAvatar(getProfile.user.avatar)
  }, [getProfile]);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [statuses, setStatuses] = useState([
    "On Vacation",
    "Working from home",
    "Out Sick",
    "Focusing",
  ]);
  const [status, setStatus] = useState("");
  const [city, setCity] = useState("");
  const [biografy, setBiografy] = useState("");
  const [company, setCompany] = useState("");

  const [avatar, setAvatar] = useState("");

  const [imageLength, setImageLength] = useState(0);

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  const uploadProps = {
    beforeUpload: (file) => {
      return new Promise((resolve, reject) => {
        // Resize the image
        Resizer.imageFileResizer(
          file,
          300,
          300,
          "JPEG",
          100,
          0,
          (uri) => {
            // Send the resized image to the server
            axios
              .post("http://localhost:5000/api/uploadimages", {
                image: uri,
              })
              .then((response) => {
                // Call the onFinish callback with the uploaded image URL
                // onFinish(response.data.url);
                setAvatar(response.data.url);
                setImageLength(1);
                resolve(false); // prevent default antd upload behavior
              })
              .catch((error) => {
                reject(error);
              });
          },
          "base64"
        );
      });
    },
    onChange: (info) => {
      const { status } = info.file;
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

  const handleUpdateProfile = () => {
    dispatch(
      UpdateProfile({
        firstname,
        lastname,
        email,
        status,
        city,
        biografy,
        company,
        avatar,
      })
    );
  };

  return (
    <MainLayout>
      <div className="container mx-auto">
        <div className="row">
          {getProfile.loading ? <LoadingSpinner /> : (
              <Fragment>
                 <div className="col-md-4 col-sm-12">
             <UserProfileCard />
           </div>
           <div className="col-md-8 col-sm-12">
             <ProfileForm
               company={company}
               setCompany={setCompany}
               biografy={biografy}
               setBiografy={setBiografy}
               city={city}
               setCity={setCity}
               status={status}
               setStatus={setStatus}
               statuses={statuses}
               handleUpdateProfile={handleUpdateProfile}
               firstname={firstname}
               setFirstname={setFirstname}
               lastname={lastname}
               setLastname={setLastname}
               email={email}
               setEmail={setEmail}
               avatar={avatar}
               setAvatar={setAvatar}
               uploadProps={uploadProps}
               onPreview={onPreview}
               imageLength={imageLength}
               setImageLength={setImageLength}
             />
           </div>
              </Fragment>
          )}
        </div>
      </div>
    </MainLayout>
  );
};

export default ProfilePage;
