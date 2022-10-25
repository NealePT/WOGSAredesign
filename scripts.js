const showPairings = () => {
  let x = document.getElementById("eventPairings");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
};

const showPairingsNavBar = () => {
  let x = document.getElementById("eventPairings");
  if (x.style.dipslay === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "block";
  }
};

// Sponsors list
let sponsors = ["Allturf", "Almack Agronomic", "Bayer", "Burnside Golf Services", "Engage Agro Corporation", "G.C Duke Equipment", "Hutcheson Sand & Mixes", "Ontario Seed Turf Co.", "Plant Science", "Podolinsky Turf Equipment", "Skyway Lawn", "Slack Reel Service", "Speare Seeds", "Syngenta", "Turf Canada", "Turf Care Products Canada", "Vanden Bussche Irigation", "Woodbay Turf"];
document.getElementById("sponsorsList").innerHTML = sponsors;
