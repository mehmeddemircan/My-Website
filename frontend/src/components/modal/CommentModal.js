import { Modal } from "antd";
import React from "react";

const CommentModal = ({ showCommentModal, handleCloseCommentModal }) => {
  return (
    <Modal
      centered
      title="Basic Modal"
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
          Discussion (20)
        </h2>
      </div>
      <form class="mb-6">
        <div class="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <label for="comment" class="sr-only">
            Your comment
          </label>
          <textarea
            id="comment"
            rows="6"
            class="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
            placeholder="Write a comment..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          class="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
        >
          Post comment
        </button>
      </form>
    </Modal>
  );
};

export default CommentModal;
