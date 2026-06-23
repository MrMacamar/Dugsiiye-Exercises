const pickColor = document.querySelector("#color");
const storeColors = document.querySelector("#colorHistory");
const removeBtn = document.querySelector("#remove");
const clearBtn = document.querySelector("#clearHistory");

// color storing ayan u isticmalaya Arraygan.
let saveColors = [];

// selecting new color weeye Ustaad
pickColor.addEventListener("input", () => {
  const newColor = pickColor.value;

  if (saveColors[0] !== newColor) {
    saveColors.unshift(newColor);
    renderHistory();
  }
});

// Not losing the select color after web refreshment = just creativity option ustaad
function renderHistory() {
  // cleaning the display box
  storeColors.innerHTML = "";

  saveColors.forEach((hex) => {
    const item = document.createElement("div");
    item.textContent = hex;
    item.classList.add("history-item");
    item.style.backgroundColor = hex;

    item.addEventListener("click", () => {
      pickColor.value = hex;
    });

    storeColors.appendChild(item);
  });
}

// Remove Button

removeBtn.addEventListener("click", () => {
  if (saveColors.length > 0) {
    saveColors.shift();
    renderHistory();
  }
});

// Clear Button

clearBtn.addEventListener("click", () => {
  saveColors = [];
  renderHistory();
});
