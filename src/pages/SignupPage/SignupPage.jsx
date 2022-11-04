import React from 'react'

import { Button, Col, Input, Label, UncontrolledCarousel } from 'reactstrap';
import { Link } from 'react-router-dom';
import cor1 from '../../images/img-cor-1.jpg'
import cor2 from '../../images/img-cor-2.jpg'
import cor3 from '../../images/img-cor-3.jpg'

const SignupPage = () => {
  return (
    <main>
      <div className='login__main'>
        <Col sm='12' md='8' className="slide__panel">
          <UncontrolledCarousel
            items={[
              {
                key: 1,
                src: cor1
              }, {
                key: 2,
                src: cor2
              }, {
                key: 3,
                src: cor3
              }
            ]}
            fade={true}
          />
        </Col>
        <Col sm='12' md='' className="form__panel">
          <form>
            <h3 className='mb-3 text-center'>Registration Form</h3>
            <div className="mb-3">
                <Label>First Name: </Label>
                <Input placeholder='First Name'/>
            </div>
            <div className="mb-3">
              <Label>Last Name:</Label>
              <Input placeholder='Last Name'/>
            </div>
            <div className='mb-3'>
              <Label>Username:</Label>
              <Input placeholder='Username' />
            </div>
            <div className="mb-3">
              <Label>Password:</Label>
              <Input type='password' placeholder='Password' />
            </div>
            <div className="mb-3">
              <Button type='submit' color='success' className='w-100 radius-0'>Register</Button>
            </div>
            <div className='mb-3 text-center fw-4'>
              <span>Already registered? <Link to='/login' style={{textDecoration: 'none', fontWeight: 600}}>Login here</Link></span>
            </div>
          </form>
        </Col>
      </div>
    </main>
  )
}

export default SignupPage