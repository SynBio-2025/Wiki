const colonies = document.querySelectorAll(".colony");
const infoBox = document.getElementById("info-box");
const colonyName = document.getElementById("colony-name");
const colonyInfo = document.getElementById("colony-info");

colonies.forEach(colony => {
  colony.addEventListener("click", () => {
    const name = colony.dataset.name;
    const info = colony.dataset.info;
    colonyName.textContent = name;
    colonyInfo.textContent = info;
    infoBox.classList.remove("hidden");
  });
});

function closeInfo() {
  infoBox.classList.add("hidden");
}
