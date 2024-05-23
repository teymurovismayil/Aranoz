import React from 'react'

function Awesome() {
  return (
    <>
    
        <div className="container mt-5 mb-5">
            <div className="row gap-5">
                <div className="col-12 col-lg-5">
                    <img src="https://preview.colorlib.com/theme/aranoz/img/offer_img.png" className='awesomeItem' alt="" />
                </div>
                <div className="col-12 col-lg-6 d-flex flex-column align-items-center justify-content-center">
                    <h1>Weekly Sale on 60% Off All Products</h1>
                    <div><input type="text" placeholder='Enter Email Address' className='inputBox' /><button className='box-button'>BOOK NOW</button></div>
                </div>

            </div>
        </div>
    
    </>
  )
}

export default Awesome