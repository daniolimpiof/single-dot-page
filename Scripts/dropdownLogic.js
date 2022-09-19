const arrowButtonsArray = [
    {
      name: "lower",
      interContainerChangebackground: "var(--sun)",
      interContainerChangeborderRadius: "0",
      interContainerChangeboxShadow: "0",
      arrowButtonbackground: "var(--wine)",
      arrowImgSrc: "./img/icons/icon-arrow-up.svg",
      collapsibleContentClassName: "collapsible-content-opened",
      arrowButtonId: "riseUp",
    },
  
    {
      name: "riseUp",
      interContainerChangebackground: "var(--wine)",
      interContainerChangeborderRadius: "0 0 8px 8px",
      interContainerChangeboxShadow: "0",
      arrowButtonbackground: "var(--white)",
      arrowImgSrc: "./img/icons/icon-arrow-down.svg",
      collapsibleContentClassName: "collapsible-content",
      arrowButtonId: "lower",
    },
  ];
  
  
  const interContainerChangeOne = document.querySelector("#inter-container-1");
  const arrowButtonOne = document.querySelector(".arrow-btn-1");
  const arrowImgOne = document.querySelector(".arrow-img-1");
  const collapsibleContentOne = document.querySelector("#collapsible-content-1");
  
  const interContainerChangetwo = document.querySelector("#inter-container-2");
  const arrowButtontwo = document.querySelector(".arrow-btn-2");
  const arrowImgTwo = document.querySelector(".arrow-img-2");
  const collapsibleContentTwo = document.querySelector("#collapsible-content-2");
  
  const interContainerChangeThree = document.querySelector("#inter-container-3");
  const arrowButtonThree = document.querySelector(".arrow-btn-3");
  const arrowImgThree = document.querySelector(".arrow-img-3");
  const collapsibleContentThree = document.querySelector(
    "#collapsible-content-3"
  );
  
  const chooseButton = (choose, select) => {
    if (choose === 1) {
      interContainerChangeOne.style.background =
        select.interContainerChangebackground;
      interContainerChangeOne.style.borderRadius =
        select.interContainerChangeborderRadius;
      interContainerChangeOne.style.boxShadow =
        select.interContainerChangeboxShadow;
      arrowButtonOne.style.background = select.arrowButtonbackground;
      arrowImgOne.src = select.arrowImgSrc;
      collapsibleContentOne.className = select.collapsibleContentClassName;
      arrowButtonOne.id = select.arrowButtonId;
    } else if (choose === 2) {
      interContainerChangetwo.style.background =
        select.interContainerChangebackground;
      interContainerChangetwo.style.borderRadius =
        select.interContainerChangeborderRadius;
      interContainerChangetwo.style.boxShadow =
        select.interContainerChangeboxShadow;
      arrowButtontwo.style.background = select.arrowButtonbackground;
      arrowImgTwo.src = select.arrowImgSrc;
      collapsibleContentTwo.className = select.collapsibleContentClassName;
      arrowButtontwo.id = select.arrowButtonId;
    } else if (choose === 3) {
      interContainerChangeThree.style.background =
        select.interContainerChangebackground;
      interContainerChangeThree.style.borderRadius =
        select.interContainerChangeborderRadius;
      interContainerChangeThree.style.boxShadow =
        select.interContainerChangeboxShadow;
      arrowButtonThree.style.background = select.arrowButtonbackground;
      arrowImgThree.src = select.arrowImgSrc;
      collapsibleContentThree.className = select.collapsibleContentClassName;
      arrowButtonThree.id = select.arrowButtonId;
    }
  };
  
  export const clickArrowButton = (event) => {
    let select;
    const setEvent = event.target;
    if (
      "arrow-btn arrow-btn-1" === setEvent.className ||
      "arrow-btn arrow-btn-1" === setEvent.parentNode.className
    ) {
      if (setEvent.id === "lower" || "lower" === setEvent.parentNode.id) {
        select = arrowButtonsArray[0];
        chooseButton(1, select);
      } else {
        select = arrowButtonsArray[1];
        chooseButton(1, select);
      }
    }
    if (
      "arrow-btn arrow-btn-2" === setEvent.className ||
      "arrow-btn arrow-btn-2" === setEvent.parentNode.className
    ) {
      if (setEvent.id === "lower" || "lower" === setEvent.parentNode.id) {
        select = arrowButtonsArray[0];
        chooseButton(2, select);
      } else {
        select = arrowButtonsArray[1];
        chooseButton(2, select);
      }
    }
    if (
      "arrow-btn arrow-btn-3" === setEvent.className ||
      "arrow-btn arrow-btn-3" === setEvent.parentNode.className
    ) {
      if (setEvent.id === "lower" || "lower" === setEvent.parentNode.id) {
        select = arrowButtonsArray[0];
        chooseButton(3, select);
      } else {
        select = arrowButtonsArray[1];
        chooseButton(3, select);
      }
    }
  };