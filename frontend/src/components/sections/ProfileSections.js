import { Space, Tag } from "antd";
import React, { Fragment } from "react";

const ProfileSections = () => {
  return (
    <Fragment>
      <article class="md:gap-8 md:grid md:grid-cols-3">
        <div>
          <div class="flex items-center mb-6 space-x-4">
            <img
              class="w-10 h-10 rounded-full"
              src="/docs/images/people/profile-picture-5.jpg"
              alt=""
            />
            <div class="space-y-1 font-medium dark:text-white">
              <p>Jese Leos</p>
              <div class="flex items-center text-sm text-gray-500 dark:text-gray-400"></div>
            </div>
          </div>
          <ul class="space-y-4 text-sm text-gray-500 dark:text-gray-400">
          
            <li class="flex items-center">
            <i class="fa-brands fa-instagram me-2"></i>
            <a href="https://www.instagram.com/mehmetcya_">mehmetcya_</a>
          
            </li>
            <hr />
            <li class="flex items-center">
            <i class="fa-brands fa-linkedin me-2"></i>
            <a href="https://www.linkedin.com/in/mehmet-demircan-815ba51b3/">mehmet-demircan-815ba51b3</a>
            </li>
            <hr />
            <li class="flex items-center">
            <i class="fa-brands fa-github me-2"></i>
             <a href="https://github.com/mehmeddemircan"> https://github.com/mehmeddemircan</a>
            </li>
            <hr />
          </ul>
        </div>
        <div class="col-span-2 mt-6 md:mt-0">
          <div class="flex items-start mb-5">
            <div class="pr-4">
              <footer>
                <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  Reviewed:{" "}
                  <time datetime="2022-01-20 19:00">January 20, 2022</time>
                </p>
              </footer>
              <h4 class="text-xl font-bold text-gray-900 dark:text-white">
                Spotless, good appliances, excellent layout, host was genuinely
                nice and helpful.
              </h4>
            </div>
            <p class="bg-blue-700 text-white text-sm font-semibold inline-flex items-center p-1.5 rounded">
              8.7
            </p>
          </div>
          <p class="mb-2 text-gray-500 dark:text-gray-400">
            The flat was spotless, very comfortable, and the host was amazing. I
            highly recommend this accommodation for anyone visiting Brasov city
            centre. It's quite a while since we are no longer using hotel
            facilities but self contained places. And the main reason is poor
            cleanliness and staff not being trained properly. This place
            exceeded our expectation and will return for sure.
          </p>
          <p class="mb-5 text-gray-500 dark:text-gray-400">
            It is obviously not the same build quality as those very expensive
            watches. But that is like comparing a Citroën to a Ferrari. This
            watch was well under £100! An absolute bargain.
          </p>

          <h4>Özellikler</h4>
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

          <hr />
          <div>
            <h4 className="my-4">Languages</h4>
            <ul className="list-unstyled">
              <li className="my-3">Türkçe </li>
              <li>English</li>
            </ul>
          </div>
          <hr />
          {/* <aside class="flex items-center mt-3 space-x-5">
            <a href="#" class="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">
                <svg aria-hidden="true" class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z"></path></svg>
                Helpful
            </a>
            <a href="#" class="inline-flex items-center text-sm font-medium text-blue-600 hover:underline dark:text-blue-500 group">
                <svg aria-hidden="true" class="w-4 h-4 mr-1.5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z"></path></svg>
                Not helpful
            </a>
        </aside> */}
        </div>
      </article>
    </Fragment>
  );
};

export default ProfileSections;
