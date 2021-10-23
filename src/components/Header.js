import logo from '../images/header__logo.svg';

function Header(props) {
    return (
        <header className="header">
            <img src={logo} alt="Логотип Mesto" className="header__logo" />
            <nav className="menu">
                {props.children}
            </nav>
        </header>
    );
}
export default Header;