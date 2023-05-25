import React, { Fragment, useState } from 'react'
import CommentModal from '../modal/CommentModal'
import { Popover } from 'antd';
import CommentPopoverContent from '../popover/content/CommentPopoverContent';
import GenericPopover from '../popover/CommentPopover';
import CommentItem from '../listitem/CommentItem';

const CommentSections = () => {

    const [showCommentModal, setShowCommentModal] = useState(false);

    const handleShowCommentModal = () => {
      setShowCommentModal(true);
    };
    const handleCloseCommentModal = () => {
      setShowCommentModal(false);
    };
  return (
   <Fragment>
     <div class="inline-flex items-center justify-center w-full">
              <hr class="w-100 h-px my-8 bg-gray-400 border-0 dark:bg-gray-700" />
              <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
                Yorumlar
              </span>
            </div>
            <div className="d-flex flex-row justify-end my-3">
              <button
                className="btn btn-dark rounded-pill"
                onClick={handleShowCommentModal}
              >
                Yorum Yap
              </button>
              <CommentModal
                
                showCommentModal={showCommentModal}
                handleCloseCommentModal={handleCloseCommentModal}
              />
            </div>
    <section class="bg-white dark:bg-gray-900 py-8 lg:py-16">
  <div class="max-w-100  px-4">
     
    
       <CommentItem />
  
    
    {/* COMMENT REPLIES */}
    <article class="p-6 mb-6 ml-6 lg:ml-12 text-base  bg-white rounded-lg dark:bg-gray-900">
        <CommentItem />
    </article>
    
   </div>
</section>
   </Fragment>
  )
}

export default CommentSections