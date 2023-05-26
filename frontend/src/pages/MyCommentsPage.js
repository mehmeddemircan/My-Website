import React, { useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'
import { useDispatch, useSelector } from 'react-redux'
import { GetUserComments } from '../redux/actions/UserActions'
import CommentItem from '../components/listitem/CommentItem'
import EmptyResult from '../components/result/EmptyResult'
import CustomPagination from '../components/pagination/CustomPagination'
import { DELETE_PROJECT_COMMENT_RESET } from '../redux/constants/CommentConstants'
import { message } from 'antd'

const MyCommentsPage = () => {

  const getUserComments = useSelector((state) => state.user.getUserComments)
  const dispatch = useDispatch()
  const auth = useSelector((state) => state.auth)
  const [limit, setLimit] = useState(4)
  const [currentPage, setCurrentPage] = useState(1)

  const deleteProjectComment = useSelector((state) => state.comment.deleteProjectComment)

  useEffect(() => {

    dispatch(GetUserComments(auth.user._id,limit,currentPage))
    if (deleteProjectComment.isDeleted) {
        message.success(deleteProjectComment.message)
        dispatch({type:DELETE_PROJECT_COMMENT_RESET})
    }
  }, [dispatch,auth,limit,currentPage,deleteProjectComment.isDeleted])
  return (
    <MainLayout>
      <div className='container mx-auto'>
       {getUserComments.totalComments === 0 ? <EmptyResult /> : (
        <div className='mt-5'>
            {getUserComments.userComments.map((comment) => (
        <CommentItem myComment={true} key={comment._id} comment={comment} />
       ))}
        <CustomPagination
        onChange={(page) => setCurrentPage(page)}
        current={currentPage}
        defaultCurrent={1}
        pageSize={limit}
        total={getUserComments.totalComments}
      />
        </div>
       )}


      </div>
    </MainLayout>
  )
}

export default MyCommentsPage