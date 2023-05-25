import React from 'react'
import MainLayout from '../layouts/MainLayout'
import BlogCard from '../components/cards/BlogCard'
import InfoBreadcrumb from '../components/breadcrumb/InfoBreadCrumb'

const BlogsPage = () => {
  return (
   <MainLayout>
    <InfoBreadcrumb 
      seperator=">"
      items={[
        {
          title: "Bloglar",
        },
        {
          title: (
           
              <a className="me-2">Adet</a>
         
          ),
        },
      ]}
    />

    <div className='container mx-auto'>
    

        <div className='d-flex flex-row flex-wrap justify-evenly'>
        <BlogCard />
        <BlogCard />
        <BlogCard />
       
        </div>
    </div>
   </MainLayout>
  )
}

export default BlogsPage