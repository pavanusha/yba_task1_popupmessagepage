const popup = document.getElementById("popup");
const popupContent = document.querySelector(".popup-content");
const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");
const additionalAction = document.getElementById("additionalAction");

openPopup.addEventListener("click", () => {
  popup.classList.remove("hidden");
  setTimeout(() => {
    popupContent.classList.add("animated");
  }, 10);
});

closePopup.addEventListener("click", closePopupFunction);
window.addEventListener("click", (event) => {
  if (event.target === popup) {
    closePopupFunction();
  }
});

additionalAction.addEventListener("click", () => {
  alert("THIS WAS DEVELOPED BY POTHALA PAVAN SAI");
});

function closePopupFunction() {
  popupContent.classList.remove("animated");
  setTimeout(() => {
    popup.classList.add("hidden");
  }, 300); // wait for animation to complete
}
