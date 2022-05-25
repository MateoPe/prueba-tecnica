import React, { useState } from 'react'
import { Alert } from 'bootstrap'
import App from '../App';

function Login() {

    const [emailLog, setEmailLog] = useState("");
    const [passwordLog, setPasswordLog] = useState("");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);

    function handleLogin(e) {
        e.preventDefault();
        let mail = localStorage.getItem("Email").replace(/"/g, "");
        let pass = localStorage.getItem("Password").replace(/"/g, "");
        if (!emailLog || !passwordLog) {
            setFlag(true);
            console.log("vacio");
        } else if (passwordLog !== pass || emailLog !== mail) {
            setFlag(true);
        } else {
            setHome(!home);
            setFlag(false);
        }
    }

    return (
        <div className='fund'>
            {home ? (
                <form onSubmit={handleLogin}>
                    <div className='card register'>
                        <h3 className='App'>Login</h3>
                        <div className='form-group campText'>
                            <label>Email</label>
                            <input type='text' className='form-control' placeholder='Example@example.com'
                                onChange={(event) => setEmailLog(event.target.value)} />
                        </div>
                        <div className='form-group campText'>
                            <label>Contraseña</label>
                            <input type='password' className='form-control' placeholder='Contraseña'
                                onChange={(event) => setPasswordLog(event.target.value)} />
                        </div>
                        <button type='submit' className='btn btn-dark btn-lg btn-block campText' style={{margin: "0px 10px 15px 119px"}}>Iniciar sesión</button>
                        {flag && (
                            <Alert color="primary" variant="danger">
                                Contraseña o usuario incorrecto!
                            </Alert>
                        )}
                    </div>
                </form>
            ) : (
                <App />
            )}
        </div>
    )
}
export default Login