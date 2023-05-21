import { Space, Tag } from 'antd'
import React, { Fragment } from 'react'

const ProjectTechnologies = () => {
  return (
    <Fragment>
         <div>
              <h5 className="my-3">Teknolojiler</h5>
              <Space size={[0, 8]} wrap>
                <Tag color="#f50">#f50</Tag>
                <Tag color="#2db7f5">#2db7f5</Tag>
                <Tag color="#87d068">#87d068</Tag>
                <Tag color="#108ee9">#108ee9</Tag>
                <Tag color="#f50">#f50</Tag>
                <Tag color="#2db7f5">#2db7f5</Tag>
                <Tag color="#87d068">#87d068</Tag>
                <Tag color="#108ee9">#108ee9</Tag>
              </Space>
            </div>
    </Fragment>
  )
}

export default ProjectTechnologies