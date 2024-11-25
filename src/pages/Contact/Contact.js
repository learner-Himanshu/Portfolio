import React from 'react'
import { FaFacebook, FaGithub, FaLinkedin } from 'react-icons/fa'
import './Contact.css'

const Contact = () => {

  return (
    <>
      <div className="contact" id='contact' data-aos="zoom-in-up"
        
        data-aos-duration='1600'>
        <div className="card card0 border-0 ">
          <div className="row">
            <div className="col-md-6 col-sm-12">
              <div className="card1">
                <div className="row border-line">
                  <img src="https://thumbs.dreamstime.com/b/business-website-page-contact-businessman-touching-us-icons-customer-service-include-telephone-address-email-message-d-227408342.jpg" alt="contact-me-picture" className='image px-5 rounded' />
                </div>
              </div>
            </div>
            <div className="col-md-6 col-sm-12">
              <div className="card d-flex card2 border-0 px-4 my-5">
                <div className="row pt-5">
                  <div className="row ms-5">
                    <h3 className='ms-5 icons'>Connect With  -
                      <FaLinkedin title='Linkedin' size={35} className='ms-3' color='#0077B5' />
                      <FaGithub title='Github' color='black' size={35} className='mx-3' />
                      <FaFacebook title='Facebook' color='#316FF6' size={35} className='ms-2' />
                    </h3>
                  </div>

                  <div className="row px-3 my-4">
                    <div className="line" />
                    <small className='or text-center'>OR</small>
                    <div className="line" />
                  </div>

                  <div className="row px-4 mt-2">
                    <input type="text" name='name' placeholder='Enter Your Email' className='mb-4' />
                  </div>
                  <div className="row px-4">
                    <input type="email" name='email' placeholder='Enter Your Email' className='mb-4' />
                  </div>
                  <div className="row px-4">
                    <textarea type="text" name='msg' placeholder='Type Your Message.' className='mb-4' />
                  </div>
                  <div className="row px-4">
                    <button type="submit" className='mb-3 btn' >SEND MESSAGE</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact