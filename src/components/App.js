import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from "./ImagePopup";
import React from "react";

import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { api } from "../utils/Api.js";
function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] =
    React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({
    link: "",
    name: "",
  });
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: "",
    about: "",
    avatar: "",
  });
  const [cards, setCards] = React.useState([]);
  const [isLoading, setLoading] = React.useState(false);
  React.useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then(([userData, initialCards]) => {
        setCurrentUser(userData);
        setCards(initialCards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  function handleCardLike(card, isLiked) {
    api.changeLikeCardStatus(card._id, !isLiked).then((newCard) => {
      setCards((cards) => cards.map((c) => (c._id === card._id ? newCard : c)));
    });
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id).then((newCard) => {
      setCards((cards) => cards.filter((c) => c._id !== card._id));
    });
  }
  function closeAllPopups(event) {
    if (
      event.target.classList.contains("popup_opened") ||
      event.target.classList.contains("popup__button-close")
    ) {
      setEditProfilePopupOpen(false);
      setAddPlacePopupOpen(false);
      setEditAvatarPopupOpen(false);
      setImagePopupOpen(false);
    }
  }
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }
  function handleCardClick(card) {
    setImagePopupOpen(true);
    setSelectedCard(card);
  }
  function handleUpdateUser({ name, about }) {
    api
      .editProfile(name, about)
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setEditProfilePopupOpen(false);
      });
  }
  function handleUpdateAvatar({ avatar }) {
    api
      .editAvatar(avatar)
      .then((userData) => {
        setCurrentUser(userData);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setEditAvatarPopupOpen(false);
      });
  }
  function handleAddPlaceSubmit({ name, link }) {
    api
      .addCard(name, link)
      .then((newCard) => {
        console.log(newCard)
        setCards([newCard, ...cards]);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setAddPlacePopupOpen(false);
      });
  }
  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onEditAvatar={handleEditAvatarClick}
          onCardClick={handleCardClick}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
          cards={cards}
        />
        <Footer />
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
          name="image"
          isOpen={isImagePopupOpen}
        ></ImagePopup>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
