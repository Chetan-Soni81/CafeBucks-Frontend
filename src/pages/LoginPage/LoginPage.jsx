import React, {useState} from 'react'
import "./loginpage.css";

import { Col, UncontrolledCarousel, Label, Input, Button } from 'reactstrap'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

import cor1 from '../../images/img-cor-1.jpg'
import cor2 from '../../images/img-cor-2.jpg'
import cor3 from '../../images/img-cor-3.jpg'
import UserServices from '../../services/UserServices';

import { useDispatch } from 'react-redux'
import { userActions } from '../../redux/slices/UserSlice'

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loginAction = async (e) => {
    e.preventDefault()

    let user = {
      username,
      password
    }
    try {
      const res = await UserServices.getUser(user);

      if(res.status === 200) {
        user = res.data;
        dispatch(userActions.addUser(user))
        toast.success("User Login Successful")
        navigate('/')
      }
    } catch (error) {
      toast.error(error.response.data.error);
    }
  }

  return (
    <main>
      <div className='login__main'>
          <Col sm='12' md='8' className="slide__panel">
            <UncontrolledCarousel
            
              items={[
                {
                  altText: "",
                  caption: "",
                  key: 1,
                  src: cor1
                }, {
                  altText: "",
                  caption: "",
                  key: 2,
                  src: cor2
                }, {
                  altText: "",
                  caption: "",
                  key: 3,
                  src: cor3
                }
              ]}
              fade={true}
            />
          </Col>
          <Col sm='12' md='' className="form__panel">
            <form onSubmit={loginAction}>
              <h3 className='mb-3 text-center'>Login Form</h3>
              <div className='mb-3'>
                <Label>Username:</Label>
                <Input value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' />
              </div>
              <div className="mb-3">
                <Label>Password:</Label>
                <Input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder='Password' />
              </div>
              <div className="mb-3">
                <Button type='submit' color='success' className='w-100 radius-0'>Login</Button>
              </div>
              <div className='mb-3 text-center fw-4'>
              <span>Not registered? <Link to='/register' style={{textDecoration: 'none', fontWeight: 600}}>Register here</Link></span>
            </div>
            </form>
          </Col>
      </div>
    </main>
  )
}

export default LoginPage