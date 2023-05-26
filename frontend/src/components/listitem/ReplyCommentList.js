import React, { Fragment } from "react";
import CommentItem from "./CommentItem";
import { useSelector } from "react-redux";

const ReplyCommentList = () => {
  const getProjectCommentReplies = useSelector(
    (state) => state.comment.getProjectCommentReplies
  );
  return (
    <Fragment>
      <article class="p-6 mb-6 ml-6 lg:ml-12 text-base  bg-white rounded-lg dark:bg-gray-900">
        {getProjectCommentReplies.commentReplies.map((comment) => (
          <CommentItem key={comment._id} comment={comment} />
        ))}
      </article>
    </Fragment>
  );
};

export default ReplyCommentList;
