import React, { Fragment } from "react";

const ProfileLanguageFeature = () => {
  return (
    <Fragment>
      <div>
        <h4 className="mt-3">Languages</h4>
        <ul className="list-unstyled">
          <li className="d-inline-flex my-3">
            Türkçe{" "}
            <img
              src={`https://flagicons.lipis.dev/flags/4x3/tr.svg`}
              alt=""
              class="img-fluid ms-3"
              width={24}
              height={24}
            />{" "}
          </li>
          <div>
            <li className="d-inline-flex my-3">
              English{" "}
              <img
                src={`https://flagicons.lipis.dev/flags/4x3/us.svg`}
                alt=""
                class="img-fluid ms-3"
                width={24}
                height={24}
              />{" "}
            </li>
          </div>
        </ul>
      </div>
    </Fragment>
  );
};

export default ProfileLanguageFeature;
