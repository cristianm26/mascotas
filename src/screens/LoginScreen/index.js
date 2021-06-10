import React, { useEffect, useState } from 'react'
import { Form, Button, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import userActions from '../../actions/user';
import './login.css'
const Login = ({ user, login, history }) => {

    useEffect(() => {
        if (user.authUser) {
            history.push('/')
        }
    }, [user]);

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login__container">
            <div className="col-sm-12 col-md-6 login__card-form" >
                <h3>Bienvenido a ReduxPuppies</h3>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label> Nombre de Usuario</Form.Label>
                        <Form.Control value={userName} onChange={(e) => setUserName(e.target.value)} type="text" placeholder=" Ingresa tu Nombre de Usuario" />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                    </Form.Group>

                    <Button onClick={() => login(userName, password)} variant="primary">
                        Entrar
                    </Button>
                    {user.error && (
                        <Alert variant='danger'>
                            {user.error}
                        </Alert>
                    )}

                </Form>
            </div>
        </div>
    )
}
const mapStateToProps = ({ user }) => ({
    user,
})

const mapDispatchToProps = () => ({
    ...userActions
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps())(Login));
