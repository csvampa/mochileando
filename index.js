function burguerMenu() {
    var menuResponsive = document.getElementById("myTopnav");
    if (menuResponsive.className === "topnav") {
      menuResponsive.className += " responsive";
    } else {
      menuResponsive.className = "topnav";
    }
  }