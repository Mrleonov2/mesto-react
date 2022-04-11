import React from "react";
import { api } from "../utils/Api.js";
import Card from "./Card";
function Main(props) {
  const [userName, setUserName] = React.useState("Имя");
  const [userDescription, setUserDescription] = React.useState("Работа");
  const [userAvatar, setUserAvatar] = React.useState("Аватар");
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getProfile(), api.getInitialCards()])
      .then(([userData, Initialcards]) => {
        setUserName(userData.name);
        setUserDescription(userData.about);
        setUserAvatar(userData.avatar);
        setCards(Initialcards);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div
          className="profile__avatar-contatiner"
          onClick={props.onEditAvatar}
        >
          <div
            className="profile__avatar"
            style={{ backgroundImage: `url(${userAvatar})` }}
          ></div>
          <div className="profile__avatar-overlay"></div>
        </div>

        <div className="profile__info">
          <h1 className="profile__name">{userName}</h1>
          <h2 className="profile__job">{userDescription}</h2>
          <button
            className="profile__button-edit button"
            type="button"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          className="profile__button-add button"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="places" aria-label="cards-list">
        <ul className="cards">
          {cards.map((item, i) => (
            <Card
              key={i}
              likes={item.likes}
              name={item.name}
              link={item.link}
              id={item.id}
              ownerId={item.owner._id}
              onCardClick={props.onCardClick}
              card={props.card}
            />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
