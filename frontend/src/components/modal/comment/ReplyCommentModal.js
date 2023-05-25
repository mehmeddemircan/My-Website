import { Modal } from 'antd'
import React from 'react'
import CommentForm from '../../forms/CommentForm'

const ReplyCommentModal = ({showReplyCommentModal,handleCloseReplyCommentModal}) => {
  return (
    <Modal
      centered
 
      open={showReplyCommentModal}
      onOk={handleCloseReplyCommentModal}
      onCancel={handleCloseReplyCommentModal}
      footer={
        [
            <button className="btn btn-dark rounded-pill" onClick={handleCloseReplyCommentModal}>Gönder</button>
        ]
      }
    >
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          Yoruma Cevap Ver 
        </h2>
      </div>
        <CommentForm />
    </Modal>
  )
}

export default ReplyCommentModal