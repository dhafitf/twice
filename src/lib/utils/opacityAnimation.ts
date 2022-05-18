import { OpacityTransition } from "~types/components";

export const addOpacity = async ({ opacity, DOMByID, time }: OpacityTransition) => {
  if (opacity < 1) {
    opacity += 0.2;
    setTimeout(function () {
      addOpacity({ opacity, DOMByID, time });
    }, time);
  }
  const DOMElement = document.getElementById(DOMByID);
  DOMElement && (DOMElement.style.opacity = `${opacity}`);
};
