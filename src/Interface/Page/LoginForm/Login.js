import React, { useState } from 'react'
import LoginForm from './LoginForm'

const Login = () => {
    const adminUser = {
        name: "fuad",
        password: "00",
    }

    const [user, setUser] = useState({name: "", email:""})
    const [error, setError] = useState ("")

    const Login = details => {
        console.log(details);
    }
    

    const Logout = () => {
        console.log(Logout)
    };

    return (
        <div>
            {(user.email !="") ? (
                <div>
                    <h2>Welcome, <span>{user.name}</span></h2>
                    <button>Logout</button>
                </div>
            ): (<LoginForm Login={Login} error={error} />)}
        </div>
    )
}

export default Login
