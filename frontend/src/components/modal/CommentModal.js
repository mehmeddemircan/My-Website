import { Modal } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import CommentForm from "../forms/CommentForm";

const CommentModal = ({ showCommentModal, handleCloseCommentModal }) => {

  

  return (
    <Modal
      centered
 
      open={showCommentModal}
      onOk={handleCloseCommentModal}
      onCancel={handleCloseCommentModal}
      footer={
        [
            <button className="btn btn-dark rounded-pill" onClick={handleCloseCommentModal}>Gönder</button>
        ]
      }
    >
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          Yorum Yap
        </h2>
      </div>
    <CommentForm />
    </Modal>
  );
};

export default CommentModal;
