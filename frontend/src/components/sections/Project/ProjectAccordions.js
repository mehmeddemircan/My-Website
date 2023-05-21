import React, { Fragment, useState } from 'react'

const ProjectAccordions = () => {
    const [show, setShow] = useState(false);
    const [show2, setShow2] = useState(false);
  return (
  <Fragment>
     <div>
              <div className="border-t border-b py-4 mt-7 border-gray-200">
                <div
                  onClick={() => setShow(!show)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <p className="text-base leading-4 text-gray-800">
                    Shipping and returns
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
                  You will be responsible for paying for your own shipping costs
                  for returning your item. Shipping costs are nonrefundable
                </div>
              </div>
            </div>
            <div>
              <div className="border-b py-4 border-gray-200">
                <div
                  onClick={() => setShow2(!show2)}
                  className="flex justify-between items-center cursor-pointer"
                >
                  <p className="text-base leading-4 text-gray-800">
                    Contact us
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
                        "transform " + (show2 ? "rotate-180" : "rotate-0")
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
                    (show2 ? "block" : "hidden")
                  }
                  id="sect"
                >
                  If you have any questions on how to return your item to us,
                  contact us.
                </div>
              </div>
            </div>
  </Fragment>
  )
}

export default ProjectAccordions