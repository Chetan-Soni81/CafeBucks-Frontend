import React from 'react'
import './footer.css'

import { Col } from 'reactstrap'
import { FaHome, FaPhone, FaEnvelope, FaPrint, FaFacebookF, FaTwitter, FaInstagram, FaGoogle } from 'react-icons/fa'

const Footer = (props) => {
  return (
    <footer>
      {/* <!-- Grid container --> */}
      <div className="container p-4 pb-0">
        {/* <!-- Section: Links --> */}
        <section className="">
          {/* <!--Grid row--> */}
          <div className="row">
            {/* <!-- Grid column --> */}
            <Col md='3' lg='3' xl='3' className="footer__col">
              <h6>
                CaféBucks
              </h6>
              <p>
                Here you can use rows and columns to organize your footer
                content. Lorem ipsum dolor sit amet, consectetur adipisicing
                elit.
              </p>
            </Col>
            {/* <!-- Grid column --> */}

            <hr className="w-100 clearfix d-md-none" />

            {/* <!-- Grid column --> */}
            <Col md='2' lg='2' xl='2' className="footer__col">
              <h6>Products</h6>
              <p>
                <a href="/">MDBootstrap</a>
              </p>
              <p>
                <a href="/" >MDWordPress</a>
              </p>
              <p>
                <a href="/">BrandFlow</a>
              </p>
              <p>
                <a href="/">Bootstrap Angular</a>
              </p>
            </Col>
            {/* <!-- Grid column --> */}

            <hr className="w-100 clearfix d-md-none" />

            {/* <!-- Grid column --> */}
            <Col md='3' lg='2' xl='2' className="footer__col">
              <h6>
                Useful links
              </h6>
              <p>
                <a href="/">Your Account</a>
              </p>
              <p>
                <a href="/">Become an Affiliate</a>
              </p>
              <p>
                <a href="/">Shipping Rates</a>
              </p>
              <p>
                <a href="/">Help</a>
              </p>
            </Col>

            {/* <!-- Grid column --> */}
            <hr className="w-100 clearfix d-md-none" />

            {/* <!-- Grid column --> */}
            <Col md='4' lg='3' xl='3' className="footer__col">
              <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
              <p className='d-flex align-items-center'><FaHome className="me-3" /> New York, NY 10012, US</p>
              <p className='d-flex align-items-center'><FaEnvelope className='me-3' /> info@gmail.com</p>
              <p className='d-flex align-items-center'><FaPhone className='me-3' /> + 01 234 567 88</p>
              <p className='d-flex align-items-center'><FaPrint className='me-3' /> + 01 234 567 89</p>
            </Col>
            {/* <!-- Grid column --> */}
          </div>
          {/* <!--Grid row--> */}
        </section>
        {/* <!-- Section: Links --> */}

        <hr className="my-3" />

        {/* <!-- Section: Copyright --> */}
        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            {/* <!-- Grid column --> */}
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              {/* <!-- Copyright --> */}
              <div className="p-3">
                © 2020 Copyright:
                <a href="https://mdbootstrap.com/" className='text-white ms-1'
                >MDBootstrap.com</a
                >
              </div>
              {/* <!-- Copyright --> */}
            </div>
            {/* <!-- Grid column --> */}

            {/* <!-- Grid column --> */}
            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              {/* <!-- Facebook --> */}
              <a href="/"
                className="btn btn-outline-light btn-floating m-1 text-white"
                role="button"
              ><FaFacebookF/></a>

              {/* <!-- Twitter --> */}
              <a href="/"
                className="btn btn-outline-light btn-floating m-1 text-white"
                role="button"
              ><FaTwitter/></a>

              {/* <!-- Google --> */}
              <a href="/"
                className="btn btn-outline-light btn-floating m-1 text-white"
                role="button"
              ><FaGoogle/>
              </a>

              {/* <!-- Instagram --> */}
              <a href="/"
                className="btn btn-outline-light btn-floating m-1 text-white"
                role="button">
              <FaInstagram/>
              </a>
            </div>
            {/* <!-- Grid column --> */}
          </div>
        </section>
        {/* <!-- Section: Copyright --> */}
      </div>
      {/* <!-- Grid container --> */}
    </footer>
  )
}

export default Footer