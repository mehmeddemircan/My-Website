import React, { Fragment } from 'react'
import MainHeader from '../components/header/MainHeader'
import MainFooter from '../components/footer/MainFooter'

const MainLayout = ({children}) => {
  return (
    <Fragment>
        <MainHeader />
    
 {children}

<MainFooter />
    </Fragment>
  )
}

export default MainLayout