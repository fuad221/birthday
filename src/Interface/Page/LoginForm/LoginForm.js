import React, { useState} from 'react'

const LoginForm = ({Login, error}) => {
    const [details, setDetails] = useState({name: "", email: "", password: ""})

    const submitHandler = e => {
        e.preventDefault();

        Login(details)
    }

    return (
        <form>
            <div>
                <h2>Login</h2>

                <div>
                    <label>name</label>
                    <input type="text" id="name" />
                </div>

                <div>
                    <label></label>
                    <input type="email" id="email" />
                </div>

                <div>
                    <label>Password</label>
                    <input type="password" name="password" id="password" />
                </div>
                <input type="submit" value="LOGIN" />
            </div>
        </form>
        
    )
}

export default LoginForm
