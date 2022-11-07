import React, { useState } from 'react'
import './adminlogin.css'

import { useNavigate } from 'react-router-dom'
import { Label, Input } from 'reactstrap'
import AdminServices from '../../services/AdminServices'

import { toast } from 'react-toastify'

const AdminLoginPage = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    const adminLogin = async (e) => {
        e.preventDefault()

        try {
            let admin = {
                username, password
            }

            console.log(admin);
            const res = await AdminServices.getAdmin(admin);

            if (res.status === 200) {
                toast.success('Admin Login Successful')
            }

        } catch (error) {
            toast.error(error.response.data.error)
            navigate('/')
        }
    }

    return (
        <main className='admin_login_main'>
            <div className='admin_login_panel'>
                <form onSubmit={adminLogin}>
                    <h3>Admin Login</h3>
                    <div className="mb-3">
                        <Label>Username:</Label>
                        <Input value={username} onChange={e => setUsername(e.target.value)} placeholder='Username' />
                    </div>
                    <div className="mb-3">
                        <Label>Password: </Label>
                        <Input type='password' value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
                    </div>
                    <div className="mb-3">
                        <button type='submit'>Login</button>
                    </div>
                </form>
            </div>
        </main>
    )
}

export default AdminLoginPage