import React, { useEffect } from 'react';
import { Route, Switch, NavLink, useHistory } from 'react-router-dom';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import Login from './Login';
import Register from './Register';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';
import AddPlacePopup from './AddPlacePopup';
import RemoveCardPopup from './RemoveCardPopup';
import ImagePopup from './ImagePopup';
import apiMesto from '../utils/api';
import ProtectedRoute from './ProtectedRoute';
import * as Auth from './Auth.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import InfoTooltip from './InfoTooltip';

function App() {

  const [cards, setCards] = React.useState([]);
  const [currentUser, setCurrentUser] = React.useState({name: '', abaut: '', avatar: '', _id: ''});
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [deleteCard, setDeleteCard] = React.useState(null);
  const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''});
  const [isSaving, setIsSaving] = React.useState(false);

  React.useEffect(() => {
    apiMesto
    .getProfileData()
    .then (data => {
      if(data) {
        setCurrentUser(data)
      }
    })
    .catch(err => console.log(err))
  }, []);



  function handleCardClick(item) {
    setSelectedCard(item);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }


  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }


  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    if(isEditProfilePopupOpen){
      setIsEditProfilePopupOpen(false);
    }
    if(isEditAvatarPopupOpen){
      setIsEditAvatarPopupOpen(false);
    }
    if(isAddPlacePopupOpen){
      setIsAddPlacePopupOpen(false);
    }
    if(isInfoTooltipOpen){
      setIsInfoTooltipOpen(false);
    }
    if(deleteCard){
      setDeleteCard(null);
    }
    if(selectedCard.link){
      setSelectedCard({name: '', link: ''});
    }
  }

  // React.useEffect(() => {
  //   const closeByEscape = (e) => {
  //     if (e.key === 'Escape') {
  //       closeAllPopups();
  //     }
  //   }

  //   document.addEventListener('keydown', closeByEscape)
    
  //   return () => document.removeEventListener('keydown', closeByEscape)
  // }, [closeAllPopups])

  function handleUpdateUser(newDataUser) {
    setIsSaving(true)
    apiMesto
    .profileRedact(newDataUser)
    .then((data) => {
      setCurrentUser(data)
      setIsEditProfilePopupOpen(false)
    })
    .catch(err => console.log(err))
    .finally(() => {
      setIsSaving(false)
    });
  }

  function handleUpdateAvatar(newAvatar) {
    setIsSaving(true)
    apiMesto
    .avatarRedact(newAvatar)
    .then((data) => {
      setCurrentUser(data)
      setIsEditAvatarPopupOpen(false)
    })
    .catch(err => console.log(err))
    .finally(() => {
      setIsSaving(false)
    });
  }

  function handleAddPlaceSubmit(newCard) {
    setIsSaving(true)
    apiMesto
    .cardCreate(newCard)
    .then((data) => {
      setCards([data, ...cards]); 
      setIsAddPlacePopupOpen(false)
    })
    .catch(err => console.log(err))
    .finally(() => {
      setIsSaving(false)
    });
  }

  React.useEffect(() => {
    apiMesto
    .getInitialCards()
    .then (data => {
        setCards(data)
    })
    .catch(err => console.log(err))
  }, []);

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    apiMesto
    .changeLikeCardStatus(card._id, isLiked)
    .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    })
    .catch(err => console.log(err))
  }

  function handleRemoveCardSubmit() {
    setIsSaving(true)
    apiMesto
    .deleteCard(deleteCard._id)
    .then(() => {
      setCards((state) => state.filter((c) => c._id !== deleteCard._id));
      setDeleteCard(false)
    })
    .catch(err => console.log(err))
    .finally(() => {
      setIsSaving(false)
    });
  }


  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userData, setUserData] = React.useState({
    _id: '', 
    email: '',
  });

  function handleLogin({ password, email }) {
    Auth.authorize({ password, email })
    .then(data => {
      if (data.token) {
        localStorage.setItem('jwt', data.token);
        tokenCheck()
        history.push('/')
      }
    })
    .catch((err) => {
      setIsInfoTooltipOpen(true)
      setIsInfoRegister(false)
      console.log(err)
    })
  }

  function handleRegister ({ password, email }) {
    Auth.register({ password, email })
    .then((res) => {
      if (res) {
        setIsInfoTooltipOpen(true)
        setIsInfoRegister(true)
        history.push('/sign-in')
      }
    })
    .catch((err) => {
      setIsInfoTooltipOpen(true)
      setIsInfoRegister(false)
      console.log(err)
    })
  }

  const history = useHistory();

  useEffect(() => {
    if (loggedIn === true) {
      history.push('/')
    }
  }, [loggedIn, history])

  useEffect(() => {
    tokenCheck()
  }, [])

  function tokenCheck () {
    let jwt = localStorage.getItem('jwt')
    if (localStorage.getItem('jwt')) {
      Auth.getContent(jwt)
      .then((res) => {
        if (res) {
          setUserData({
            _id: res.data._id, 
            email: res.data.email,
          })
          setLoggedIn(true)
        }
      })
    }
  }

  function handleSingOut () {
    localStorage.removeItem('jwt');
  }

  const [isInfoTooltipOpen, setIsInfoTooltipOpen] = React.useState(false);
  const [isInfoRegister, setIsInfoRegister] = React.useState(false);

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>

        <Switch>
          <ProtectedRoute
            exact path='/'
            loggedIn={loggedIn}
            initialCards={cards}
            onCardLike={handleCardLike}
            onCardDelete={setDeleteCard}
            сardClick={handleCardClick}
            onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            singOut={handleSingOut}
            userMail={userData}
            component={Main}
          />

          <Route path='/sign-in'>
            <Header>
              <NavLink to="/sign-up" className="menu__link">Регистрация</NavLink>
            </Header>
            <Login onLogin={handleLogin} />
          </Route>

          <Route path='/sign-up'>
            <Header>
              <NavLink to="/sign-in" className="menu__link">Войти</NavLink>
            </Header>
            <Register onRegister={handleRegister} />
          </Route>

        </Switch>

        <Footer />

        <InfoTooltip
          isOpen={isInfoTooltipOpen}
          isRegister={isInfoRegister}
          closePopup={closeAllPopups}
        />

        <EditProfilePopup
          saving={isSaving}
          onUpdateUser={handleUpdateUser} 
          isOpen={isEditProfilePopupOpen}
          closePopup={closeAllPopups}
        />
      
        <AddPlacePopup
          saving={isSaving}
          onAddPlace={handleAddPlaceSubmit}
          isOpen={isAddPlacePopupOpen}
          closePopup={closeAllPopups}
        />

        <EditAvatarPopup
          saving={isSaving}
          onUpdateAvatar={handleUpdateAvatar}
          isOpen={isEditAvatarPopupOpen}
          closePopup={closeAllPopups}
        />

        <RemoveCardPopup
          saving={isSaving}
          onRemoveCard={handleRemoveCardSubmit}
          isOpen={deleteCard}
          closePopup={closeAllPopups}
        />

        <ImagePopup
          cardName={selectedCard.name}
          cardLink={selectedCard.link}
          closePopup={closeAllPopups}
        />

      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
