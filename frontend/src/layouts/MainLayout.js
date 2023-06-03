import React, { Fragment } from 'react'
import MainHeader from '../components/header/MainHeader'
import MainFooter from '../components/footer/MainFooter'
import BackTopButton from '../components/backtop/BackTopButton'

const MainLayout = ({children}) => {
  return (
    <Fragment>
        <MainHeader />
    
 {children}
 <BackTopButton />
<MainFooter />
    </Fragment>
  )
}

export default MainLayout