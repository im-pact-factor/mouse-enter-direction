const card = document.querySelector(".box") as HTMLDivElement;

const getCardDirection = (targetCard: HTMLDivElement, event: MouseEvent) => {
  const { width, height, left, top } = targetCard.getBoundingClientRect();
  const x =
    (event.pageX - left - width / 2) * (width > height ? height / width : 1);
  const y =
    (event.pageY - top - height / 2) * (height > width ? width / height : 1);
  const directionNumber =
    Math.round((Math.atan2(y, x) * (180 / Math.PI) + 180) / 90 + 3) % 4;
  const directionNames = ["上", "右", "下", "左"];
  const direction = directionNames[directionNumber];
  ChangeCardText(targetCard, direction);
};

const ChangeCardText = (targetCard: HTMLDivElement, direction?: string) => {
  targetCard.innerText = direction || "";
};

const MouseEnterCard = (targetCard: HTMLDivElement, event: MouseEvent) => {
  getCardDirection(targetCard, event);
};

const MouseLeaveCard = (targetCard: HTMLDivElement) => {
  ChangeCardText(targetCard);
};

card.addEventListener("mouseenter", (event) => MouseEnterCard(card, event));
card.addEventListener("mouseleave", () => MouseLeaveCard(card));
