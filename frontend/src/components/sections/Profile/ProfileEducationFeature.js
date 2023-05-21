import React, { Fragment } from 'react'

const ProfileEducationFeature = () => {
  return (
    <Fragment>
            <div>
                <h4 className='my-4'>Egitim </h4>
                <div className='d-inline-flex align-items-center '>
                    <img className='img-fluid' src='https://upload.wikimedia.org/wikipedia/commons/thumb/7/76/Konya_Teknik_%C3%9Cniversitesi_logo.svg/220px-Konya_Teknik_%C3%9Cniversitesi_logo.svg.png' width={48} height={48} />
                    <div className='ms-3 '>Konya Teknik Universitesi</div>
                    <span className='ms-3'>( 2020-2024 )</span>
                    
               
                
                </div>
               
                <div className='mt-3' >
                    <p>Tür : Lisans</p>
                    <p>Bölüm : Bilgisayar Mühendisliği</p>
                    <p>Gano : 3.15</p>
                    </div>
               
                
            </div>
    </Fragment>
  )
}

export default ProfileEducationFeature