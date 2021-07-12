import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext'

const Login =()=> {

    const authContet = useContext(AuthContext);
    const loginHandler = () =>{
        authContet.login()
    }
    return (
        <div>
            <button onClick={loginHandler}>login</button>
        </div>
    )
}
export default Login;