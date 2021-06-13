function validate() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("eMail").value;
  const message = document.getElementById("message").value;
  const error_message = document.getElementById("error_message");

  var text;
  if (name.length <= 5) {
    text = "Please enter a name";
    error_message.innerHTML = text;
    return farlse;
  }
  if (email.indexOf("@") === -1 || email.length < 8) {
    text = "Please enter a valid E-mail";
    error_message.innerHTML = text;
    return false;
  }
  if (message.length <= 10) {
    text = "Please give some more information";
    error_message.innerHTML = text;
    return false;
  }
  alert("your message has been recieved!");
  return true;
}
