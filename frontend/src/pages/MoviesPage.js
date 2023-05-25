import React from 'react'
import MainLayout from '../layouts/MainLayout'
import EmptyResult from '../components/result/EmptyResult'
import InfoBreadcrumb from '../components/breadcrumb/InfoBreadCrumb'

const MoviesPage = () => {
  return (
   <MainLayout>
     <InfoBreadcrumb
          seperator=">"
          items={[
            {
              title: "Filmler",
            },
            {
              title: (
               
                  <a className="me-2">Adet</a>
             
              ),
            },
          ]}
        />
    <EmptyResult />
   </MainLayout>
  )
}

export default MoviesPage