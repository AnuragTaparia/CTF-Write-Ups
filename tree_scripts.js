var displayStates = [];
function showDiv(div) {
  div.style.height = "";
  div.style.display = "block";
  div.style.visibility = "visible";
}
function hideDiv(div) {
  div.style.height = "0px";
  div.style.display = "none";
  div.style.visibility = "hidden";
}
function toggleDiv(div, defaultState) {
  if (displayStates[div.id] === undefined) {
    displayStates[div.id] = defaultState;
  }
  displayStates[div.id] = !displayStates[div.id];
  if (displayStates[div.id]) {
    showDiv(div);
  } else {
    hideDiv(div);
  }
}
function toggleDivName(divname, defaultState) {
  var div = document.getElementById(divname);
  toggleDiv(div, defaultState);
}
