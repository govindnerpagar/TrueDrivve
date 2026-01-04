function sendWhatsApp() {
  let name = document.getElementById("name").value;
  let pickup = document.getElementById("pickup").value;
  let drop = document.getElementById("drop").value;
  let car = document.getElementById("car").value;
  let location = document.getElementById("location").value;

  let message =
    "Hello TrueDrivve,%0A" +
    "Name: " + name + "%0A" +
    "Car: " + car + "%0A" +
    "Pickup Date: " + pickup + "%0A" +
    "Drop Date: " + drop + "%0A" +
    "Pickup Location: " + location;

  window.open("https://wa.me/918087709190?text=" + message);
}
