import React from 'react'
import ProjectCard from '../cards/ProjectCard'
import ProjectPagination from '../pagination/ProjectPagination'

const ProjectList = () => {
  return (
    <div className='container mx-auto'>
         <h1 className='text-xl my-3 text-center'>Projects</h1>
         <hr />
        <div className='d-flex  flex-wrap  justify-content-between'>
           
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
        </div>
        <ProjectPagination />
        <hr />
    </div>
  )
}

export default ProjectList