// @todo: Темплейт карточки

const cardTemplate = document.querySelector("#card-template").content; //+ шаблон!

// @todo: DOM узлы

const container = document.querySelector(".content");
const addButton = container.querySelector(".profile__add-button"); //добавление
const cardContainer = document.querySelector(".places__list"); //контейнер карточки

// @todo: Функция создания карточки

function createCard(card, deleteCard) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true); //+ карточка из шаблона
  const deleteButton = cardElement.querySelector(".card__delete-button"); //удаление
  const cardImage = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  cardImage.src = card.link;
  cardImage.alt = card.name;
  cardTitle.textContent = card.name;
  deleteButton.addEventListener("click", function () {
    deleteCard(cardElement);
  });

  return cardElement;
}

function placeCard() {
  initialCards.forEach(function (card) {
    const cardDetails = createCard(card, deleteCard);
    cardContainer.append(cardDetails);
  });

  // @todo: Функция удаления карточки

  function deleteCard(cardElement) {
    cardElement.remove();
  }
}

// @todo: Вывести карточки на страницу

placeCard();
