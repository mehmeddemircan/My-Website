import React, { Fragment } from 'react'

const AddCommentButton = ({handleShowCommentModal}) => {
  return (
   <Fragment>
     <button
                  className="btn btn-dark rounded-pill"
                  onClick={handleShowCommentModal}
                >
                  Yorum Yap
                </button>
   </Fragment>
  )
}

export default AddCommentButton