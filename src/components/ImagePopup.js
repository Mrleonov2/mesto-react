function ImagePopup(props){
  return(<div className={`popup popup_type_image ${
    props.card.isActive ? "popup_opened" : ""
  }`} aria-label="popup-image" onMouseDown={props.onClose}>
  <figure className="popup__image-container">
    <button className="popup__button-close button" type="button" onMouseDown={props.onClose}></button>
    <img className="popup__image" src={props.card.link} alt="Всплывающее изображение" />
    <figcaption className="popup__image-caption">{props.card.name}</figcaption>
  </figure>
</div>)
}
export default ImagePopup;