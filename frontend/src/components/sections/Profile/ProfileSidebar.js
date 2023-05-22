import { Image } from 'antd'
import React, { Fragment } from 'react'

const ProfileSidebar = () => {
  return (
    <Fragment>
         <div>
          <div class="flex items-center mb-6 space-x-4">
            <Image
              class="w-12 h-10 rounded-full"
              src="https://images.pexels.com/photos/15254467/pexels-photo-15254467/free-photo-of-dj-with-mixer-during-party.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
           
          </div>
          <div class="space-y-1 font-medium dark:text-white">
              <p>Mehmet Demircan</p>
              <div class="flex items-center text-sm text-gray-500 dark:text-gray-400"></div>
            </div>
          <ul class="space-y-4 text-sm text-gray-500 dark:text-gray-400">
          <li class="flex items-center">
          <i class="fa-solid fa-cake-candles me-2"></i>
       
            <a href="https://www.instagram.com/mehmetcya_">22.08.2002</a>
          
            </li>
            <hr />
            <li class="flex items-center">
            <i class="fa-solid fa-location-dot me-2"></i>
            <a href="https://www.instagram.com/mehmetcya_">Kayseri </a>
          
            </li>
            <hr />
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
    </Fragment>
  )
}

export default ProfileSidebar