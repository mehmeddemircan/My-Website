import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentForm from "../../forms/CommentForm";
import { SendProjectComment, UpdateProjectComment } from "../../../redux/actions/CommentActions";
import { useNavigate, useParams } from "react-router-dom";

const EditCommentModal = ({ comment ,showCommentModal, handleCloseCommentModal }) => {

  const updateProjectComment = useSelector(
    (state) => state.comment.updateProjectComment
  );
  const { projectId } = useParams();
  const auth = useSelector((state) => state.auth);
  const [text, setText] = useState(comment.text);
  const [userId, setUserId] = useState(auth.user._id);

  const dispatch = useDispatch();
  const handleEditComment = () => {

      dispatch(UpdateProjectComment(comment._id,{ text, projectId, userId }));

    
  };

  useEffect(() => {
    if (updateProjectComment.isUpdated) {
      handleCloseCommentModal();
 
    }
  }, [updateProjectComment.isUpdated]);

  return (
    <Modal
      centered
      open={showCommentModal}
      onOk={handleCloseCommentModal}
      onCancel={handleCloseCommentModal}
      footer={[
        <button
          className="btn btn-dark rounded-pill"
          onClick={handleEditComment}
        >
          Gönder{" "}
        </button>,
      ]}
    >
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          Yorum Yap
        </h2>
      </div>
      <CommentForm text={text} setText={setText} />
    </Modal>
  );
};

export default EditCommentModal;
