// -----GO TO HOME----
console.log("hello how are you");
function page1() {
  window.open("../index.html");
}

// -----PRINT OUT-----
function printOut(print) {
  var data = document.getElementById(print).innerHTML;
  // var body = document.getElementById("body").innerHTML;
  // document.getElementById("body").innerHTML = data;
  window.print(data);
  // document.getElementById("body").innerHTML = body;
}
