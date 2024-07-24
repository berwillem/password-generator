function generatePassword() {
  const length = 12;
  const charset =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=";

  var password = "";

  for (var i = 0; i < length; i++) {
    password = password + charset[randomIndex];
  }

  document.getElementById("password").value = password;
}
