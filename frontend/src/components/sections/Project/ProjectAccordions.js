import React, { Fragment, useState } from 'react'
import { useSelector } from 'react-redux';


const ProjectAccordions = () => {
    const [show, setShow] = useState(true);

    const getProjectDetails = useSelector((state) => state.project.getProjectDetails)

  return (
  <Fragment>
     <div>
              <div className="border-t border-b py-4 mt-7 border-gray-200">
                <div
                  onClick={() => setShow(!show)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <p className="text-base leading-4 text-gray-800">
                   Web Url
                  </p>
                  <button
                    className="
									cursor-pointer
									focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
									rounded
								"
                    aria-label="show or hide"
                  >
                    <svg
                      className={
                        "transform " + (show ? "rotate-180" : "rotate-0")
                      }
                      width="10"
                      height="6"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 1L5 5L1 1"
                        stroke="#4B5563"
                        strokeWidth="1.25"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div
                  className={
                    "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                    (show ? "block" : "hidden")
                  }
                  id="sect"
                >
             <a  className='text-gray-600' href={getProjectDetails.project.webUrl} target='_blank'>{getProjectDetails.project.webUrl}</a> 
                </div>
              </div>
           
           
            </div>
  </Fragment>
  )
}

export default ProjectAccordions