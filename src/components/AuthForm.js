import React from 'react';

function AuthForm(props) {

    const [validationMail, setValidationMail] = React.useState('');
    const [validationPassword, setValidationPassword] = React.useState('');

    const [data, setData] = React.useState({
        password: '', 
        email: '',
    });

    function handleChange(e) {
        const {name, value, validationMessage} = e.target
        setData({
            ...data,
            [name]: value
        })
        if(name === 'email'){
            setValidationMail(validationMessage)
        }
        if(name === 'password'){
            setValidationPassword(validationMessage)
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.login(data);
    }

    const inputNameClassName = (
        `auth-form__input ${validationMail ? 'popup__input_error_active' : ''}`
    );

    const inputLinkClassName = (
        `auth-form__input ${validationPassword ? 'popup__input_error_active' : ''}`
    );
    
    return (
        <form onSubmit={handleSubmit} name="register" className="auth-form">
            <section className="auth-form__element">
                <input value={data.email || ''} onChange={handleChange} id="sing-in-email" type="email" placeholder="Email" name="email" className={inputNameClassName} required />
                <span className="popup__input-error" id="sing-in-place-error">{validationMail}</span>
            </section>
            <section className="auth-form__element">
                <input value={data.password || ''} onChange={handleChange} id="sing-in-password" type="password" placeholder="Пароль" name="password" className={inputLinkClassName} required minLength="1" maxLength="40" />
                <span className="popup__input-error" id="sing-in-place-error">{validationPassword}</span>
            </section>
            <button type="submit" className="auth-form__submit">{props.buttonText}</button>
        </form>
    );
}

export default AuthForm;