function sidebar_open() {
  document.getElementById("page").style.marginLeft = "10%";
  document.getElementById("page").style.marginRight = "5%";
  document.getElementById("sidebar").style.display = "block";
  document.getElementById("sidebaroverlay").style.display = "block";
}

function sidebar_close() {
  document.getElementById("page").style.marginLeft = "5%";
  document.getElementById("page").style.marginRight = "5%";
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("sidebaroverlay").style.display = "none";
}

function links_open() { document.getElementById("links").style.display = "block"; }

function links_close() { document.getElementById("links").style.display = "none"; }

function links_toggle() {
  var linksstate = document.getElementById("links").style.display;
  switch(linksstate) {
    case "none": links_open(); break;
    case "block": links_close(); break;
    default: links_open(); break;
  }
}

function contact_open() { document.getElementById("contact").style.display = "block"; }

function contact_close() { document.getElementById("contact").style.display = "none"; }

function contact_toggle() {
  var detailsstate = document.getElementById("contact").style.display;
  switch(detailsstate) {
    case "none": contact_open(); break;
    case "block": contact_close(); break;
    default: contact_open(); break;
  }
}

function show_prev_career() {
  document.getElementById("prev_career").style.display = "block";
  document.getElementById("show_prev_career").style.display = "none";
}

function hide_prev_career() {
  document.getElementById("prev_career").style.display = "none";
  document.getElementById("show_prev_career").style.display = "block";
}

function show_prev_projects() {
  document.getElementById("prev_projects").style.display = "block";
  document.getElementById("show_prev_projects").style.display = "none";
}

function hide_prev_projects() {
  document.getElementById("prev_projects").style.display = "none";
  document.getElementById("show_prev_projects").style.display = "block";
}

function twoDigit(n) {
  return n<10 ? "0"+n : n;
}

function last_modified() {
  var date = new Date(document.lastModified);
  var months = new Array ("Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec");
  document.write(twoDigit(date.getUTCDate())+"-"+months[date.getUTCMonth()]+"-"+date.getUTCFullYear()+" "+twoDigit(date.getUTCHours())+":"+twoDigit(date.getUTCMinutes())+" UTC");
}

function author_name() {
  document.write(document.head.querySelector("[name=author]").content);
}