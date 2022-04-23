import React from "react";
import PopupWithForm from "./PopupWithForm";
function AddPlacePopup(props) {
  const titleCard = React.useRef();
  const linkCard = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();
    console.log({name:titleCard.current.value,link:linkCard.current.value})
    props.onAddPlace({name:titleCard.current.value,link:linkCard.current.value});
  }
  function handleChange(e) {}
  return (
    <PopupWithForm
      title="Новое место"
      name="add-place"
      submitText="Создать"
      onClose={props.onClose}
      isOpen={props.isOpen}
      onSubmit={handleSubmit}
    >
      <label className="popup__form-label">
        <input
          className="popup__input popup__input_type_place-name"
          type="text"
          placeholder="Название"
          name="name"
          id="title-input"
          minLength="2"
          maxLength="30"
          ref={titleCard}
          required
        />
        <span className="popup__input-error title-input-error"></span>
      </label>
      <label className="popup__form-label">
        <input
          className="popup__input popup__input_type_image"
          type="url"
          placeholder="Ссылка на картинку"
          name="link"
          id="image-url-input"
          ref={linkCard}
          required
        />
        <span className="popup__input-error image-url-input-error"></span>
      </label>
    </PopupWithForm>
  );
}
export default AddPlacePopup;
