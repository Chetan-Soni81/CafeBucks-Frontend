import React,{ useState } from 'react'; 

import { Button, Col, Input, Label, UncontrolledCarousel } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import cor1 from '../../images/img-cor-1.jpg'
import cor2 from '../../images/img-cor-2.jpg'
import cor3 from '../../images/img-cor-3.jpg'
import UserServices from '../../services/UserServices';

import { toast } from 'react-toastify'

const SignupPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [firstname, setFirstname] = useState("")
  const [lastname, setLastname] = useState("")
  const [email, setEmail] = useState("")

  const navigate = useNavigate()

  const signupAction = async (e) => {
    e.preventDefault();

    try {
      let user = {
        username,
        password,
        firstname,
        lastname,
        email
      }

      const res = await UserServices.createUser(user);

      if(res.status === 200){
        toast.success('Account Created Successful')
        navigate('/login')
      }
    } catch (error) {
      toast.error(error.response.data.error)
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
          <form onSubmit={signupAction}>
            <h3 className='mb-3 text-center'>Registration Form</h3>
            <div className="mb-3">
                <Label>First Name: </Label>
                <Input value={firstname} onChange={e=>setFirstname(e.target.value)} placeholder='First Name'/>
            </div>
            <div className="mb-3">
              <Label>Last Name:</Label>
              <Input value={lastname} onChange={e=>setLastname(e.target.value)} placeholder='Last Name'/>
            </div>
            <div className='mb-3'>
              <Label>Username:</Label>
              <Input value={username} onChange={e=>setUsername(e.target.value)} placeholder='Username' />
            </div>
            <div className="mb-3">
              <Label>E-mail:</Label>
              <Input value={email} onChange={e=>setEmail(e.target.value)} placeholder='E-mail'/>
            </div>
            <div className="mb-3">
              <Label>Password:</Label>
              <Input value={password} onChange={e=>setPassword(e.target.value)} type='password' placeholder='Password' />
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