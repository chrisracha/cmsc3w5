function responsive() {
    var x = document.getElementById("nav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }

    var x = document.getElementById("button");
    if (x.className === "fa fa-bars") {
        x.className = "fa-sharp fa-solid fa-x";
    } else if (x.className === "fa-sharp fa-solid fa-x") {
        x.className = "fa fa-bars";
    }
  }