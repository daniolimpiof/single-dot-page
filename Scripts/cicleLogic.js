const redButton = document.querySelector(".icon-red-signal");
const yellowButton = document.querySelector(".icon-yellow-signal");
const greyButton = document.querySelector(".icon-grey-signal");
const yellowImg = document.querySelector(".yellow-img");
const greyImg = document.querySelector(".grey-img");
const redImg = document.querySelector(".red-img");
const circleCenter = document.querySelector(".circle-center");
const messageCenter = document.createElement("p");

const buttonSignalsArray = [
  {
    button: yellowButton,
    positionOneId: "plus",
    positinoOnesrc: "./img/icons/icon-plus.svg",
    positinoOnealt: "plus signal",
    positionTwoId: "plus",
    positionTwosrc: "./img/icons/icon-plus.svg",
    positionTwoalt: "plus signal",
    positionThreeId: "minus",
    positionThreesrc: "./img/icons/icon-minos.svg",
    positionThreealt: "minus signal",
    centerColor: "var(--sun)",
    message: "Esse texto é referente ao botão que estão sobre a ficha.",
    strong: "amarelo",
  },
  {
    button: redButton,
    positionOneId: "plus",
    positinoOnesrc: "./img/icons/icon-plus.svg",
    positinoOnealt: "plus signal",
    positionTwoId: "minus",
    positionTwosrc: "./img/icons/icon-minos.svg",
    positionTwoalt: "minus signal",
    positionThreeId: "plus",
    positionThreesrc: "./img/icons/icon-plus.svg",
    positionThreealt: "plus signal",
    centerColor: "var(--tomato)",
    message: "Esse texto é referente ao botão que estão sobre a ficha.",
    strong: "vermelho",
  },
  {
    button: greyButton,
    positionOneId: "minus",
    positinoOnesrc: "./img/icons/icon-minos.svg",
    positinoOnealt: "minus signal",
    positionTwoId: "plus",
    positionTwosrc: "./img/icons/icon-plus.svg",
    positionTwoalt: "plus signal",
    positionThreeId: "plus",
    positionThreesrc: "./img/icons/icon-plus.svg",
    positionThreealt: "plus signal",
    centerColor: "var(--silver)",
    message: "Esse texto é referente ao botão que estão sobre a ficha.",
    strong: "cinza",
  },
];

const messageLong = buttonSignalsArray[0].message;
let colorStrong = buttonSignalsArray[0].strong;
messageCenter.innerHTML = messageLong + " <strong>" + colorStrong + "</strong>";
circleCenter.appendChild(messageCenter);

const chooseButton = (select) => {
  greyButton.id = select.positionOneId;
  greyImg.src = select.positinoOnesrc;
  greyImg.alt = select.positinoOnealt;
  redButton.id = select.positionTwoId;
  redImg.src = select.positionTwosrc;
  redImg.alt = select.positionTwoalt;
  yellowButton.id = select.positionThreeId;
  yellowImg.src = select.positinoOnesrc;
  yellowImg.alt = select.positinoOnealt;
  circleCenter.style.background = select.centerColor;
  colorStrong = select.strong;
  messageCenter.innerHTML =
    messageLong + " <strong>" + colorStrong + "</strong>";
  circleCenter.appendChild(messageCenter);
};

export const circleLogicClicks = (event) => {
  let select;
  const setEvent = event.target;

  if (
    "icon-signal icon-yellow-signal" === setEvent.className ||
    "icon-signal icon-yellow-signal" === setEvent.parentNode.className
  ) {
    console.log(setEvent);
    if (setEvent.id === "plus" || "plus" === setEvent.parentNode.id) {
      select = buttonSignalsArray[0];
      chooseButton(select);
    }
  }

  if (
    "icon-signal icon-red-signal" === setEvent.className ||
    "icon-signal icon-red-signal" === setEvent.parentNode.className
  ) {
    console.log(setEvent);
    if (setEvent.id === "plus" || "plus" === setEvent.parentNode.id) {
      select = buttonSignalsArray[1];
      chooseButton(select);
    }
  }

  if (
    "icon-signal icon-grey-signal" === setEvent.className ||
    "icon-signal icon-grey-signal" === setEvent.parentNode.className
  ) {
    console.log(setEvent);
    if (setEvent.id === "plus" || "plus" === setEvent.parentNode.id) {
      select = buttonSignalsArray[2];
      chooseButton(select);
    }
  }
};
