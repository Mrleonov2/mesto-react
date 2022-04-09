function PopupWithForm(props) {
  return (
    <>
      <div
        className={`popup popup_type_${props.name} ${
          props.isOpen ? "popup_opened" : ""
        }`}
        onMouseDown={props.onClose}
      >
        <div className="popup__container">
          <h2 className="popup__heading">{props.title}</h2>
          <button
            className="popup__button-close button"
            type="button"
            onMouseDown={props.onClose}
          ></button>
          <form
            className="popup__form popup__form_type_edit"
            name={props.name}
            id={props.name}
            noValidate
          >
            <fieldset className="popup__input-container">
            {props.children}
              <button className="popup__submit button" type="submit">
                {props.submit}
              </button>
              
            </fieldset>
          </form>
        </div>
      </div>
    </>
  );
}
export default PopupWithForm;
