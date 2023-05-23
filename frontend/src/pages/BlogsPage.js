import React from 'react'
import MainLayout from '../layouts/MainLayout'
import BlogCard from '../components/cards/BlogCard'

const BlogsPage = () => {
  return (
   <MainLayout>
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