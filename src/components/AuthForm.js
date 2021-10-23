import React from 'react';

function AuthForm(props) {

    const [data, setData] = React.useState({
        password: '', 
        email: '',
    });

    function handleChange(e) {
        const {name, value} = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    function handleSubmit(e) {
        e.preventDefault();
        props.login(data);
    }
    
    return (
        <form onSubmit={handleSubmit} name="register" className="auth-form">
            <section className="auth-form__element">
                <input value={data.email || ''} onChange={handleChange} id="sing-in-email" type="email" placeholder="Email" name="email" className="auth-form__input" required minLength="2" maxLength="40" />
            </section>
            <section className="auth-form__element">
                <input value={data.password || ''} onChange={handleChange} id="sing-in-password" type="password" placeholder="Пароль" name="password" className="auth-form__input" required minLength="2" maxLength="40" />
            </section>
            <button type="submit" className="auth-form__submit">{props.buttonText}</button>
        </form>
    );
}

export default AuthForm;