import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import React from "react";

function App() {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen]= React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen]= React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen]= React.useState(false);
  const [selectedCard,setSelectedCard] = React.useState({isActive:false});
 
  function closeAllPopups(event){
    
      if (
        event.target.classList.contains("popup_opened") ||
        event.target.classList.contains("popup__button-close")
      ){
        setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setEditAvatarPopupOpen(false);
    setSelectedCard({isActive:false});

      }
    
  }
  function handleEditAvatarClick(){
    setEditAvatarPopupOpen(true);
  }
  function handleEditProfileClick(){
    setEditProfilePopupOpen(true);
  } 
  function handleAddPlaceClick(){
    setAddPlacePopupOpen(true);
  }
  function handleCardClick(evt){
    setSelectedCard({isActive:true});

  }
  return (
    <div className="App">
    
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} card={selectedCard}/>
      <Footer />
      <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
      <PopupWithForm title="Редактировать профиль" name="edit-profile" submit="Сохранить" onClose={closeAllPopups} isOpen={isEditProfilePopupOpen} children={<><label class="popup__form-label">
              <input
                class="popup__input popup__input_type_name"
                type="text"
                placeholder="Ф.И.О."
                name="name"
                minLength="2"
                maxLength="40"
                id="name-input"
                required
              />
              <span class="popup__input-error name-input-error"></span>
            </label>
            <label class="popup__form-label">
              <input
                class="popup__input popup__input_type_job"
                type="text"
                placeholder="О себе"
                name="about"
                minLength="2"
                maxLength="200"
                id="job-input"
                required
              />
              <span class="popup__input-error job-input-error"></span>
            </label>
</>
              }/>
      <PopupWithForm title="Новое место" name="add-place" submit="Создать" onClose={closeAllPopups} isOpen={isAddPlacePopupOpen} children={<> <label class="popup__form-label"
              ><input
                class="popup__input popup__input_type_place-name"
                type="text"
                placeholder="Название"
                name="name"
                id="title-input"
                minLength="2"
                maxLength="30"
                required
              /><span class="popup__input-error title-input-error"></span>
            </label>
            <label class="popup__form-label">
              <input
                class="popup__input popup__input_type_image"
                type="url"
                placeholder="Ссылка на картинку"
                name="link"
                id="image-url-input"
                required
              /><span class="popup__input-error image-url-input-error"></span>
            </label></>}
            />
      <PopupWithForm title="Обновить аватар" name="edit-avatar" submit="Сохранить" onClose={closeAllPopups} isOpen={isEditAvatarPopupOpen} children={<><label class="popup__form-label">
            <input
              class="popup__input popup__input_type_avatar"
              type="url"
              placeholder="Ссылка на картинку"
              name="avatar"
              id="avatar-input"
              minLength="2"
              required
            /><span class="popup__input-error avatar-input-error"></span></label></>}/>
      
    </div>
  );
}

export default App;
