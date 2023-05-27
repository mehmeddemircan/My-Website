import React, { useEffect, useState } from 'react'

import { Modal } from 'antd'
import { useSelector } from 'react-redux';
import GiveJobForm from '../../forms/GiveJobForm';

const UpdateFormModal = ({ children,showUpdateFormModal,handleCloseUpdateFormModal}) => {

   
  return (
    <Modal
    centered
    open={showUpdateFormModal}
    onOk={handleCloseUpdateFormModal}
    onCancel={handleCloseUpdateFormModal}
    footer={null}
    title="Formu Düzenle"

  >
   
    {children}
  </Modal>
  )
}

export default UpdateFormModal