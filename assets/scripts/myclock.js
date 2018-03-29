function twoDigit(n) {
  return n < 10 ? "0" + n : n;
}

var months = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec");

function last_modified() {
  var date = new Date(document.lastModified);
  document.write(twoDigit(date.getUTCDate())+"-"+months[date.getUTCMonth()]+"-"+date.getUTCFullYear()+" "+twoDigit(date.getUTCHours())+":"+twoDigit(date.getUTCMinutes()));
}

function clock() {
  var curr = new Date();

  var date = twoDigit(curr.getUTCDate());
  var month = months[curr.getUTCMonth()];
  var year = curr.getUTCFullYear();
  var hours = twoDigit(curr.getUTCHours());
  var minutes = twoDigit(curr.getUTCMinutes());
  var seconds = twoDigit(curr.getUTCSeconds());

  document.getElementById("date").innerHTML = date;
  document.getElementById("month").innerHTML = month;
  document.getElementById("year").innerHTML = year;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

setInterval("clock()", 1000);
