var btn = document.getElementById("button");
var modal = document.getElementById("modal")
var close = document.getElementsByClassName("close")[0];

var yes = document.getElementById("yes")
var no = document.getElementById("no")
var text = document.getElementById("text")

btn.onclick = function() {
  modal.style.display = "block";
}

close.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

yes.onclick = function() {
  window.location.href = "https://youtube.com"
}

no.onclick = function() {
  modal.style.display = "none"
  btn.style.display = "none"
  document.body.style.backgroundColor = "red"
  text.innerHTML = "u bent niet oud genoeg :("
}