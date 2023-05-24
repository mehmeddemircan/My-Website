import { Drawer, Modal } from "antd";
import React, { Fragment } from "react";

const WatchTemplateModal = ({
  showTemplateVideoModal,
  handleCloseShowTemplateVideoModal,
}) => {
  return (
    <Fragment>
      <Drawer
        width={"100vw"}
        centered
        title="Basic Modal"
        open={showTemplateVideoModal}
        onClose={handleCloseShowTemplateVideoModal}
      >
        <video class="w-full" autoplay controls>
          <source
            src="https://res.cloudinary.com/dn6obhhvq/video/upload/v1614435478/samples/elephants.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </Drawer>
    </Fragment>
  );
};

export default WatchTemplateModal;
