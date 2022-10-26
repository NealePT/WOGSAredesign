const showPairings = () => {
  let x = document.getElementById("eventPairings");
  let y = document.getElementById("pairingsButton");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  if (y.innerHTML === "Hide Event Pairings") {
    y.innerHTML = "Show Event Pairings";
  } else {
    y.innerHTML = "Hide Event Pairings";
  }
};

const showPairingsNavBar = () => {
  let x = document.getElementById("eventPairings");
  let y = document.getElementById("pairingsButton");
  if (x.style.dipslay === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
  if (y.innerHTML === "Show Event Pairings") {
    y.innerHTML = "Hide Event Pairings";
  } else {
    y.innerHTML = "Hide Event Pairings";
  }
};

// Sponsors list
const showSponsors = () => {
  let sponsors = ["Allturf", "Almack Agronomic", "Bayer", "Burnside Golf Services", "Engage Agro Corporation", "G.C Duke Equipment", "Hutcheson Sand & Mixes", "Ontario Seed Turf Co.", "Plant Science", "Podolinsky Turf Equipment", "Skyway Lawn", "Slack Reel Service", "Speare Seeds", "Syngenta", "Turf Canada", "Turf Care Products Canada", "Vanden Bussche Irigation", "Woodbay Turf"];
  let text = "<ul>";
  sponsors.forEach(myFunction);
  text += "</ul>";
  // eslint-disable-next-line func-style
  function myFunction(value) {
    text += "<li>" + value + "</li>";
  }
  return text;
};
document.getElementById("sponsorsList").innerHTML = showSponsors();


// Show NavBar Links on smaller screens
const showNav = () => {
  let x = document.getElementById("topNav");
  if (x.style.display === "none") {
    x.style.display = "block";
    console.log(x.style.display);
  } else {
    x.style.display = "none";
    console.log(x.style.display);
  }
}