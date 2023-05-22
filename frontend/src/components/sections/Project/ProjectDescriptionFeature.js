import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'

const ProjectDescriptionFeature = () => {

  const getProjectDetails = useSelector((state) => state.project.getProjectDetails)

  return (
   <Fragment>
     <div className="border-b border-gray-200 pb-6">
          
              <h1
                className="
							lg:text-2xl
							text-xl
							font-semibold
							lg:leading-6
							leading-7
							text-gray-800
							mt-2
						"
              >
                {getProjectDetails.project.title}
              </h1>
              <div className='mt-4'>
                <ul className='ms-4 list-disc text-sm text-gray-500 dark:text-gray-400 '>
                    {
                      getProjectDetails.project.features.map((feature) => (
                        <li className='my-2'>{feature}</li>
                      
                      ))
                    }
                  
                </ul>
            </div>
            </div>
           
   </Fragment>
  )
}

export default ProjectDescriptionFeature