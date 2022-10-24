const showPairings = () => {
  let x = document.getElementById("eventPairings");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};