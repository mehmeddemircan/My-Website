import { Space, Tag } from 'antd'
import React, { Fragment } from 'react'

const ProfileTechFeatures = () => {
  return (
    <Fragment>
          <h4 className='my-4'>Özellikler</h4>
          <hr />
          <div class="gap-8 sm:grid sm:grid-cols-2 my-4">
            <div>
              <dl>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Staff
                </dt>
                <dd class="flex items-center mb-3">
                  <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div
                      class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                      style={{ width: "89%" }}
                    ></div>
                  </div>
                  <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    8.8
                  </span>
                </dd>
              </dl>
              <dl>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Comfort
                </dt>
                <dd class="flex items-center mb-3">
                  <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div
                      class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                      style={{ width: "89%" }}
                    ></div>
                  </div>
                  <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    8.9
                  </span>
                </dd>
              </dl>
              <dl>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Free WiFi
                </dt>
                <dd class="flex items-center mb-3">
                  <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div
                      class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                      style={{ width: "89%" }}
                    ></div>
                  </div>
                  <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    8.8
                  </span>
                </dd>
              </dl>
              <dl>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Facilities
                </dt>
                <dd class="flex items-center">
                  <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div
                      class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                      style={{ width: "89%" }}
                    ></div>
                  </div>
                  <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    5.4
                  </span>
                </dd>
              </dl>
            </div>
            <div>
              <dl>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Value for money
                </dt>
                <dd class="flex items-center mb-3">
                  <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div
                      class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                      style={{ width: "89%" }}
                    ></div>
                  </div>
                  <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    8.9
                  </span>
                </dd>
              </dl>
              <dl>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Cleanliness
                </dt>
                <dd class="flex items-center mb-3">
                  <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div
                      class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                      style={{ width: "89%" }}
                    ></div>
                  </div>
                  <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    7.0
                  </span>
                </dd>
              </dl>
              <dl>
                <dt class="text-sm font-medium text-gray-500 dark:text-gray-400">
                  Location
                </dt>
                <dd class="flex items-center">
                  <div class="w-full bg-gray-200 rounded h-2.5 dark:bg-gray-700 mr-2">
                    <div
                      class="bg-blue-600 h-2.5 rounded dark:bg-blue-500"
                      style={{ width: "89%" }}
                    ></div>
                  </div>
                  <span class="text-sm font-medium text-gray-500 dark:text-gray-400">
                    8.9
                  </span>
                </dd>
              </dl>
            </div>
          </div>
          <div>
            <h3>Etiketler</h3>
            <Space className="mb-4" wrap>
              <Tag color="#f50">#f50</Tag>
              <Tag color="#2db7f5">#2db7f5</Tag>
              <Tag color="#87d068">#87d068</Tag>
              <Tag color="#108ee9">#108ee9</Tag>
            </Space>
          </div>
    </Fragment>
  )
}

export default ProfileTechFeatures