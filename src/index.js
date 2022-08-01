const controlls = {
  settings: document.getElementById("settings"),
  refresh: document.getElementById("refresh"),
  like: document.getElementById("like"),
  favourites: document.getElementById("favourites")
};

const dialogue = {
  self: document.getElementsByClassName("dialogue")[0],
  inputs: {
    width: document.getElementById("width"),
    height: document.getElementById("height"),
    id: document.getElementById("imgId")
  },
  save: document.getElementById("saveButton")
};

const img = document.getElementById("image");

const urlBase = "https://picsum.photos/";
let urlProps = "";

const bindEventListeners = () => {
  controlls.settings.addEventListener("click", () => {
    dialogue.self.classList.remove("dialogue--hidden");
  });

  dialogue.save.addEventListener("click", () => {
    const { width, height, id } = dialogue.inputs;
    dialogue.self.classList.add("dialogue--hidden");
    urlProps =
      (id.value && "id/" + id.value) +
      (width.value && "/" + width.value) +
      (height.value && "/" + height.value);
    urlProps = urlProps.length ? urlProps : "600/400";
  });

  controlls.refresh.addEventListener("click", () => {
    console.log(urlProps);
    fetch(urlBase + urlProps)
      .then((response) => {
        img.src = response.url;
      })
      .catch((error) => console.error(error));
  });
};

const removeEventListeners = () => {
  controlls.settings.removeEventListener("click");
  dialogue.save.removeEventListener("click");
  controlls.refresh.removeEventListener("click");
};

bindEventListeners();
