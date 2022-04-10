function ImagePopup({ card, onClose, name }) {
  return (
    <div
      className={`popup popup_type_${name} ${
        card.active ? "popup_opened" : ""
      }`}
      aria-label="popup-image"
      onMouseDown={onClose}
    >
      <figure className="popup__image-container">
        <button
          className="popup__button-close button"
          type="button"
          onMouseDown={onClose}
        ></button>
        <img
          className="popup__image"
          src={card.link}
          alt="Всплывающее изображение"
        />
        <figcaption className="popup__image-caption">{card.name}</figcaption>
      </figure>
    </div>
  );
}
export default ImagePopup;
