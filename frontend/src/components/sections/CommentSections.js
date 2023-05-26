import React, { Fragment, useEffect, useState } from "react";
import CommentModal from "../modal/comment/CommentModal";

import CommentItem from "../listitem/CommentItem";
import { useDispatch, useSelector } from "react-redux";
import { GetProjectComments, GetProjectCommentReplies } from "../../redux/actions/CommentActions";
import { useParams } from "react-router-dom";
import { message } from "antd";
import {
  CREATE_PROJECT_COMMENT_RESET,
  DELETE_PROJECT_COMMENT_RESET,
  UPDATE_PROJECT_COMMENT_RESET,
} from "../../redux/constants/CommentConstants";
import AddedEmptyResult from "../result/AddedEmptyResult";
import AddCommentButton from "../button/AddCommentButton";
import CustomPagination from "../pagination/CustomPagination";

const CommentSections = () => {
  const [showCommentModal, setShowCommentModal] = useState(false);

  const handleShowCommentModal = () => {
    setShowCommentModal(true);
  };
  const handleCloseCommentModal = () => {
    setShowCommentModal(false);
  };

  const getProjectComments = useSelector(
    (state) => state.comment.getProjectComments
  );
  const sendProjectComment = useSelector(
    (state) => state.comment.sendProjectComment
  );
  const deleteProjectComment = useSelector(
    (state) => state.comment.deleteProjectComment
  );
  const updateProjectComment = useSelector(
    (state) => state.comment.updateProjectComment
  );
  const dispatch = useDispatch();
  const { projectId } = useParams();
  const [limit, setLimit] = useState(2);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    dispatch(GetProjectComments(projectId, limit, currentPage));
    if (sendProjectComment.isAdded) {
      message.success(sendProjectComment.message);
      dispatch({ type: CREATE_PROJECT_COMMENT_RESET });
    }
    if (deleteProjectComment.isDeleted) {
      message.success(deleteProjectComment.message);
      dispatch({ type: DELETE_PROJECT_COMMENT_RESET });
    }
    if (updateProjectComment.isUpdated) {
      message.success(updateProjectComment.message);
      dispatch({ type: UPDATE_PROJECT_COMMENT_RESET });
    }
  }, [
    dispatch,
    projectId,
    limit,
    currentPage,
    sendProjectComment.isAdded,
    deleteProjectComment.isDeleted,
    updateProjectComment.isUpdated,
  ]);


  return (
    <Fragment>
      <div class="inline-flex items-center justify-center w-full">
        <hr class="w-100 h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />
        <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
          Yorumlar
        </span>
      </div>
      {getProjectComments.totalComments !== 0 && (
        <div className="d-flex flex-row justify-end my-3">
          <AddCommentButton handleShowCommentModal={handleShowCommentModal} />
          <CommentModal
            showCommentModal={showCommentModal}
            handleCloseCommentModal={handleCloseCommentModal}
          />
        </div>
      )}
      <section class="bg-white dark:bg-gray-900 py-8 lg:py-16">
        <div class="max-w-100  px-4">
          {getProjectComments.totalComments === 0 ? (
            <AddedEmptyResult
              title="Burası birazcık boş gibi"
              content="İlk Yorumunu yaparak bizi mutlu edebilirsin , hem bizim için düşüncelerin önemli olduğunu bilmeni isteriz"
            >
              <div className="d-flex flex-row justify-center ">
                <AddCommentButton handleShowCommentModal={handleShowCommentModal} />
                <CommentModal
                  showCommentModal={showCommentModal}
                  handleCloseCommentModal={handleCloseCommentModal}
                />
              </div>
            </AddedEmptyResult>
          ) : (
            getProjectComments.comments.map((comment) => (
              <CommentItem key={comment._id} comment={comment} />
            ))
          )}

        
     
        </div>
      </section>
      <CustomPagination
        onChange={(page) => setCurrentPage(page)}
        current={currentPage}
        defaultCurrent={1}
        pageSize={limit}
        total={getProjectComments.totalComments}
      />
    </Fragment>
  );
};

export default CommentSections;
