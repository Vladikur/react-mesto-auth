import React from 'react';
import AuthForm from './AuthForm';

function Login(props) {

    return (
        <main className="auth">
            <h2 className="auth__header">Вход</h2>
            <AuthForm
                login={props.onLogin}
                buttonText="Войти"
            />
        </main>
    );
}
export default Login;