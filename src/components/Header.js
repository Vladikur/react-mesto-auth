import logo from '../images/header__logo.svg';
import React from 'react';

function Header(props) {

    const [isMenuOpen, SetIsMenuOpen] = React.useState(false);

    function handleMenuClick() {
        if(isMenuOpen) {
            SetIsMenuOpen(false)
        } else {
            SetIsMenuOpen(true);
        }
    }

    const headerContainerClassName = (
        `header__container1 ${isMenuOpen ? 'header__container1_active' : ''}`
    );

    const buttonMenuOpenClassName = (
        `${isMenuOpen ? 'header__button-menu_hidden' : 'header__button-menu'}`
    );

    const buttonMenuCloseClassName = (
        `header__button-menu-close ${isMenuOpen ? 'header__button-menu-close_active' : ''}`
    ); 

    return (
        <header>
        <div className={headerContainerClassName}>
            {props.children}
        </div>
        <div className="header__container2">
            <img src={logo} alt="Логотип Mesto" className="header__logo" />
            <button onClick={handleMenuClick} aria-label="открытие меню бургер" type="button" className={buttonMenuOpenClassName}></button>
            <button onClick={handleMenuClick} aria-label="закрытие меню бургер" type="button" className={buttonMenuCloseClassName}></button>
            <nav className="menu">
                {props.children}
            </nav>
        </div>
        </header>
    );
}
export default Header;