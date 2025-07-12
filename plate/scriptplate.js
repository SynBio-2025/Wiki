const colonies = document.querySelectorAll(".colony");
const infoBox = document.getElementById("info-box");
const colonyName = document.getElementById("colony-name");
const colonyInfo = document.getElementById("colony-info");

let infoBoxOpen = false;

colonies.forEach(colony => {
  colony.addEventListener("click", () => {
    const name = colony.dataset.name;
    const info = colony.dataset.info;
    colonyName.textContent = name;
    colonyInfo.textContent = info;
    infoBox.classList.remove("hidden");
    infoBoxOpen = true;
    event.stopPropagation();
  });
});

function closeInfo() {
  infoBox.classList.add("hidden");
  infoBoxOpen = false;
}
document.addEventListener("click", (event) => {
  if (
    infoBoxOpen &&
    !infoBox.contains(event.target) &&
    !event.target.classList.contains("colony")
  ) {
    closeInfo();
  }
});
