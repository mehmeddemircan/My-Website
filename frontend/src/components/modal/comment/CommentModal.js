import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommentForm from "../../forms/CommentForm";
import { SendProjectComment } from "../../../redux/actions/CommentActions";
import { useNavigate, useParams } from "react-router-dom";

const CommentModal = ({ showCommentModal, handleCloseCommentModal }) => {
  const navigate = useNavigate();
  const sendProjectComment = useSelector(
    (state) => state.comment.sendProjectComment
  );
  const { projectId } = useParams();
  const auth = useSelector((state) => state.auth);
  const [text, setText] = useState("");
  const [userId, setUserId] = useState(auth.user._id);

  const dispatch = useDispatch();
  const handleSendComment = () => {
    if (auth.authenticate) {
      dispatch(SendProjectComment({ text, projectId, userId }));
    }
    else {
      navigate("/login", { replace: true });
    }
  };

  useEffect(() => {
    if (sendProjectComment.isAdded) {
      handleCloseCommentModal();
      setText("");
    }
  }, [sendProjectComment.isAdded]);

  return (
    <Modal
      centered
      open={showCommentModal}
      onOk={handleCloseCommentModal}
      onCancel={handleCloseCommentModal}
      footer={[
        <button
          className="btn btn-dark rounded-pill"
          onClick={handleSendComment}
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

export default CommentModal;
