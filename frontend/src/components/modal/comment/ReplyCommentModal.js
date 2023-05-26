import { Modal, message } from 'antd'
import React, { useEffect, useState } from 'react'
import CommentForm from '../../forms/CommentForm'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { SendProjectComment } from '../../../redux/actions/CommentActions'

const ReplyCommentModal = ({comment,showReplyCommentModal,handleCloseReplyCommentModal}) => {

  const auth = useSelector((state) => state.auth)
  const {projectId} = useParams()
  const [text, setText] = useState("")
  const [userId, setUserId] = useState(auth.user._id)
const [parentCommentId, setParentCommentId] = useState(comment._id)

  const dispatch = useDispatch()
  const handleReplyComment = () => {
    dispatch(SendProjectComment({text,projectId,userId,parentCommentId}))
  }
  const sendProjectComment = useSelector((state) => state.comment.sendProjectComment)
  useEffect(() => {
    if (sendProjectComment.isAdded) {
      handleCloseReplyCommentModal();
      setText("");
    }
  }, [sendProjectComment.isAdded]);
  return (  
    <Modal
      centered
 
      open={showReplyCommentModal}
      onOk={handleCloseReplyCommentModal}
      onCancel={handleCloseReplyCommentModal}
      footer={
        [
            <button className="btn btn-dark rounded-pill" onClick={handleReplyComment}>Gönder</button>
        ]
      }
    >
      <div class="flex justify-between items-center mb-6">
        <h2 class="text-lg lg:text-2xl font-bold text-gray-900 dark:text-white">
          Yoruma Cevap Ver  
        </h2>
      </div>
        <CommentForm text={text} setText={setText} />
    </Modal>
  )
}

export default ReplyCommentModal