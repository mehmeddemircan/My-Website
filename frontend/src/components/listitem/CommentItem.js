import React, { Fragment, useEffect, useState } from 'react'
import GenericPopover from '../popover/CommentPopover'
import CommentPopoverContent from '../popover/content/CommentPopoverContent'
import ReplyCommentModal from '../modal/comment/ReplyCommentModal'
import { useDispatch, useSelector } from 'react-redux'
import { DeleteProjectComment, GetProjectCommentReplies } from '../../redux/actions/CommentActions'
import { useParams } from 'react-router-dom'
import { message } from 'antd'
import { CREATE_PROJECT_COMMENT_RESET, DELETE_PROJECT_COMMENT_RESET, UPDATE_PROJECT_COMMENT_RESET } from '../../redux/constants/CommentConstants'
import ReplyCommentList from './ReplyCommentList'

const CommentItem = ({comment}) => {


    const [showCommentReplies, setShowCommentReplies] = useState(false)

    const handleToggleShowCommentReplies = () => {
        setShowCommentReplies((prev) => !prev)
    }

    const [showReplyCommentModal, setShowReplyCommentModal] = useState(false)
    
    const handleShowReplyCommentModal = () => {
        setShowReplyCommentModal(true )
    }

    const handleCloseReplyCommentModal = () => {
        setShowReplyCommentModal(false)
    }

    const auth = useSelector((state) => state.auth)


    const [userId, setUserId] = useState(comment.userId)
    const {projectId} = useParams()

    const dispatch = useDispatch()
    const handleDeleteProjectComment = () => {
        const confirmed = window.confirm("Bu yorumu silmek istediğinizden emin misiniz ?  ");
        if (confirmed) {
          dispatch(DeleteProjectComment(comment._id, { userId, projectId }));
        }
   
    }
    const sendProjectComment = useSelector(
        (state) => state.comment.sendProjectComment
      );

      const deleteProjectComment = useSelector((state) => state.comment.deleteProjectComment)

      const updateProjectComment = useSelector((state) => state.comment.updateProjectComment)

    useEffect(() => {
        if (showCommentReplies) {
            
             dispatch(GetProjectCommentReplies(comment._id))
        }
        if (sendProjectComment.isAdded) {
          dispatch({ type: CREATE_PROJECT_COMMENT_RESET });
        }
        if (deleteProjectComment.isDeleted) {
            dispatch({ type: DELETE_PROJECT_COMMENT_RESET });
        }
        if (updateProjectComment.isUpdated) {
            dispatch({ type: UPDATE_PROJECT_COMMENT_RESET });
        }
      }, [dispatch,showCommentReplies,sendProjectComment.isDeleted,updateProjectComment.isUpdated,deleteProjectComment.isDeleted])
    

  return (
    <Fragment>
        <article class="p-6 mb-6 text-base border-t bg-white rounded-lg dark:bg-gray-900">
         <footer class="flex justify-between items-center mb-2">
            <div class="flex items-center">
                <p class="inline-flex items-center mr-3 text-sm text-gray-900 dark:text-white"><img
                        class="mr-2 w-6 h-6 rounded-full"
                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                        alt="Michael Gough" />Michael Gough</p>
                <p class="text-sm text-gray-600 dark:text-gray-400"><time pubdate datetime="2022-02-08"
                        title="February 8th, 2022">Feb. 8, 2022</time></p>
            </div>
        {auth.user._id === comment.userId && (
             <GenericPopover  content={<CommentPopoverContent comment={comment} handleDeleteProjectComment={handleDeleteProjectComment} />} >
             <button id="dropdownComment1Button" 
                 class="inline-flex items-center text-sm font-medium text-center text-gray-400 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                 type="button">
                 <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                     xmlns="http://www.w3.org/2000/svg">
                     <path
                         d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                     </path>
                 </svg>
                 <span class="sr-only">Comment settings</span>
             </button>
         
   </GenericPopover>
        )}
         
           
        </footer>
        <p class="text-gray-500 dark:text-gray-400">{comment.text}</p>
        <div class="flex items-center mt-4 space-x-4">
            {/* like , dislike butonlar eklenebilir */}
            {auth.user._id !== comment.userId && (
                   <button onClick={handleShowReplyCommentModal} type="button"
                   class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400">
                   <svg aria-hidden="true" class="mr-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path></svg>
                   Reply
               </button>
   
            ) }
          {comment.parentCommentId === null && (
              <button  type="button"
              class="flex items-center text-sm text-gray-500 hover:underline dark:text-gray-400"
              onClick={handleToggleShowCommentReplies}
              >
               
               
                  {/* badge olsun  */}
             {showCommentReplies ? "Kapat Yanıtları" : "Tüm Yanıtları Gör"}  
             {showCommentReplies ? <i class="fa-solid fa-angle-up"></i> : <i class="fa-solid fa-angle-down"></i>}
          </button>
          )}
            <ReplyCommentModal 
                comment={comment}
                showReplyCommentModal={showReplyCommentModal}
                handleCloseReplyCommentModal={handleCloseReplyCommentModal}
            />
        </div>
        </article>
        {showCommentReplies && (
             <ReplyCommentList />
        )}
                  
    </Fragment>
  )
}

export default CommentItem