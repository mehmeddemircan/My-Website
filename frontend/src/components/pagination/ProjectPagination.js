import { Pagination } from 'antd';
import React from 'react'

const ProjectPagination = () => {
  return (
    <div className='d-flex flex-row justify-content-end mb-4 mt-2'>
        <Pagination defaultCurrent={1} total={50} />
    </div>
   
  )
}

export default ProjectPagination