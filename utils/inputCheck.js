const checkInputs = (user_name, password) => {
  if (user_name == "") {
    alert("please enter a username");
  }

  if (password == "") {
    alert("please enter a password");
  }
};

module.exports = checkInputs;
