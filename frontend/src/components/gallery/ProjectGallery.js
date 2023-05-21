import { Image } from 'antd'
import React, { Fragment } from 'react'

const ProjectGallery = () => {
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
                <div>
                  <Image
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="grid gap-4">
                <div>
                  <Image
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="grid gap-4">
                <div>
                  <Image
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div class="grid gap-4">
                <div>
                  <Image
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg"
                    alt=""
                  />
                </div>
                <div>
                  <Image
                    class="h-auto max-w-full rounded-lg"
                    src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </Image.PreviewGroup>
    </Fragment>
  )
}

export default ProjectGallery