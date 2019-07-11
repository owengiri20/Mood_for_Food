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
        <img src="${save.img.slice(0, 4)}s${save.img.slice(
      4
    )}" alt="" srcset="" />
        <p>
       ${save.title}
        </p>
    </div>
    </a>
    </li>
    `;
    uiElements.savedList.insertAdjacentHTML("afterbegin", markup);
  });
};

export const toggleSaveBtn = isSaved => {
  const iconString = isSaved ? "fas fa-bookmark" : "far fa-bookmark";
  document.querySelector(".save-recipe i").className = iconString;
};
