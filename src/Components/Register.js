import React, { useState } from 'react'
import { Alert } from 'bootstrap';
import Login from './Login'

function Register() {

    const [name, setName] = useState("");
    const [identification, setIdentification] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [flag, setFlag] = useState(false);
    const [login, setLogin] = useState(true);

    function handleSubmit(e) {
        e.preventDefault();
        if (!name || !identification || !email || !password) {
            setFlag(true);
        } else {
            setFlag(false);
            localStorage.setItem("Email", JSON.stringify(email));
            localStorage.setItem("Password", JSON.stringify(password));
            console.log("guardado en el local storage");
            setLogin(!login);
        }
    }

    function handleClick() {
        setLogin(!login);
    }

    return (
        <div className='card fund'>
            {login ? (
                <form onSubmit={handleSubmit}>
                    <div className='card register'>
                        <h1 className='App'>Regristro</h1>
                        <div className='form-group campText'>
                            <label>Nombre</label>
                            <input type='text' className='form-control' placeholder='Nombre Completo'
                                onChange={(event) => setName(event.target.value)} />
                        </div>
                        <div className='form-group campText'>
                            <label>Identificación</label>
                            <input type='text' className='form-control' placeholder='Numero de identificación'
                                onChange={(event) => setIdentification(event.target.value)} />
                        </div>
                        <div className='form-group campText'>
                            <label>Email</label>
                            <input type='text' className='form-control' placeholder='Example@example.com'
                                onChange={(event) => setEmail(event.target.value)} />
                        </div>
                        <div className='form-group campText'>
                            <label>Contraseña</label>
                            <input type='password' className='form-control' placeholder='Contraseña'
                                onChange={(event) => setPassword(event.target.value)} />
                        </div>
                        <button type='submit' className='btn btn-dark btn-lg btn-block campText'>Registrar</button>
                        <p className="forgot-password text-right" onClick={handleClick}>Ya tienes cuenta? {" "} Inicia sesión</p>
                        {flag && (
                            <Alert color="primary" variant="danger">
                                Por favor llene todos los campos
                            </Alert>
                        )}
                    </div>
                </form>
            ) : (
                <Login />
            )}
        </div>
    )
}

export default Register