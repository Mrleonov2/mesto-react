function Card({name,link,likes,onCardClick,card}){
  function handleClick() {
    card[name] = name;
    card[link] = link;
    onCardClick(card);
    
  }
    return(<li className="cards__item" >
    <img
      className="cards__image"
      src={link}
      alt="Изображение карточки"
      onMouseDown={handleClick}
    />
    <h2 className="cards__title">{name}</h2>
    <button className="cards__like button" type="button"></button>
    <button className="cards__delete button" type="button"></button>
    <div className="cards__like-count">{`${likes.length}`}</div>
  </li>)
   
}
export default Card;