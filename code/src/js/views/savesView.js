import { uiElements } from "./base";

export const clearSavedUI = () => {
  uiElements.savedList.innerHTML = "";
};
export const renderSaves = saves => {
  saves.forEach(save => {
    const markup = `
    <li>
    <a href="#${save.id}" class="saved-link">
    <div class="save-link-content">
        <img src="${save.img}" alt="" srcset="" />
        <p>
       ${save.title}
        </p>
    </div>
    </a>
    </li>
    `;
    uiElements.savedList.insertAdjacentHTML("beforeend", markup);
  });
};
