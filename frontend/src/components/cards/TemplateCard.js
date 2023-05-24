import React, { Fragment, useState } from 'react'
import { Avatar, Card } from 'antd';
import {
    ChevronDownIcon,
    PhoneIcon,
    PlayCircleIcon,
  } from "@heroicons/react/20/solid"
import WatchTemplateModal from '../modal/WatchTemplateModal';
const { Meta } = Card;


const TemplateCard = () => {

    const [showTemplateVideoModal, setShowTemplateVideoModal] = useState(false)

    const handleShowTemplateVideoModal = () => {
        setShowTemplateVideoModal(true)
    }
    const handleCloseShowTemplateVideoModal = () => {
        setShowTemplateVideoModal(false)
    }
  return (
   <Fragment>
     <Card
    style={{
      width: 300,
    }}
    hoverable
    className='mx-3 my-3'
    cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
    actions={[
       <div className='flex flex-row justify-center '>
 
          <a
            key="templatevideo"
            onClick={handleShowTemplateVideoModal}
            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
          >
           
           Video
          </a>
            <WatchTemplateModal 
                showTemplateVideoModal={showTemplateVideoModal}
                handleCloseShowTemplateVideoModal={handleCloseShowTemplateVideoModal}
            />
          <a
            key="templateönzile"
            href="/template/preview"
            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
          >
           
            Ön izle
          </a>
          
          <a
            key="satınal"
            href="/payment"
            className="flex items-center justify-center gap-x-2.5 p-3 text-sm font-semibold leading-6 text-gray-900 hover:bg-gray-100"
          >
           
           Satın Al
          </a>
   
   
       </div>
       
    ]}
  >
    <Meta
      title="Card title"
      description="This is the description"
    />
  </Card>
   </Fragment>
  )
}

export default TemplateCard