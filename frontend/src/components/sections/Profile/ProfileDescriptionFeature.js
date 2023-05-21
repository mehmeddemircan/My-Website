import React, { Fragment } from 'react'

const ProfileDescriptionFeature = () => {
  return (
    <Fragment>
          <div class="flex items-start mb-2">
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

    </Fragment>
  )
}

export default ProfileDescriptionFeature