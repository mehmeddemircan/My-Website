import { Space, Tag } from 'antd'
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

const ProjectTechnologies = () => {

  const getProjectDetails = useSelector((state) => state.project.getProjectDetails)

  return (
    <Fragment>
         <div>
              <h5 className="my-3">Teknolojiler</h5>
              <Space size={[0, 8]} wrap>
                {getProjectDetails.project.technologies.map((technology) => (
                
                   <Tag color="#108ee9" className='px-3 py-1'><span style={{fontSize: '15px'}}>{technology}</span></Tag>
                ))}
              </Space>
            </div>
    </Fragment>
  )
}

export default ProjectTechnologies