import { Image } from 'antd'
import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

const ProjectGallery = () => {

  const getProjectDetails = useSelector((state) => state.project.getProjectDetails)

  return (
    <Fragment>
         <Image.PreviewGroup
            preview={{
              onChange: (current, prev) =>
                console.log(`current index: ${current}, prev index: ${prev}`),
            }}
          >
            <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div class="grid gap-4">
                {getProjectDetails.project.images.map((image) => (
                   <div>
                   <Image
                     class="h-auto max-w-full rounded-lg"
                     src={image.url}
                     alt=""
                   />
                 </div>
              
                ))}
              </div>
            </div>
          </Image.PreviewGroup>
    </Fragment>
  )
}

export default ProjectGallery