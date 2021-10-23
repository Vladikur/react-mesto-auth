import error from '../images/error.svg';
import logined from '../images/logined.svg';

function InfoTooltip(props) {

    // const element = false

    // const login = true

    return (
    <section className={`popup ${props.isOpen ? 'popup_is-opened' : ''}`}>
        <div className="popup__container">
                <button  onClick={props.closePopup} aria-label="Закрыть модальное окно" type="button" className="popup__exit"></button>
                <img src={`${props.isRegister ? logined : error}`} alt="индикатор регистрации" className="popup__logined" />
                <h2 className="popup__text-logined">{`${props.isRegister ? 'Вы успешно зарегистрировались!' : 'Что-то пошло не так! Попробуйте ещё раз.'}`}</h2>
        </div>
    </section>
    );
}
export default InfoTooltip;