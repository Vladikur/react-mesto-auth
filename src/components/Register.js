import React from 'react';
import { Link } from 'react-router-dom';
import AuthForm from './AuthForm';

function Register(props) {

    return (
        <main className="auth">
            <h2 className="auth__header">Регистрация</h2>
            <AuthForm login={props.onRegister} buttonText="Зарегистрироваться"/>
            <Link className="auth__link" to='/sign-in'>Уже зарегистрированы? Войти</Link>
        </main>
    );
}
export default Register;