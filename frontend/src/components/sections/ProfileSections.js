import { Space, Tag } from "antd";
import React, { Fragment } from "react";
import ProfileTechFeatures from "./Profile/ProfileTechFeatures";
import LanguageFeature from "./Profile/ProfileLanguageFeature";
import ProfileDescriptionFeature from "./Profile/ProfileDescriptionFeature";
import ProfileSidebar from "./Profile/ProfileSidebar";
import ProfileEducationFeature from "./Profile/ProfileEducationFeature";
import ProfileIntership from "./Profile/ProfileIntership";

const ProfileSections = () => {
  return (
    <Fragment>
      <article class="md:gap-8 md:grid md:grid-cols-3">
       <ProfileSidebar />
        <div class="col-span-2 mt-6 md:mt-0">
          <ProfileDescriptionFeature />
          <hr/>
          <ProfileEducationFeature />
          <hr />
          <ProfileIntership />
          <hr />
       
        <ProfileTechFeatures />
       
          <hr />
         <LanguageFeature />
          <hr />
    
        </div>
      </article>
    </Fragment>
  );
};

export default ProfileSections;
