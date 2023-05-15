const signUpHandler = async e => {
  e.preventDefault();
  const user_name = $("#signup-username").val().trim();
  const password = $("#signup-password").val().trim();

  if (user_name == "") {
    $("#signup-username").attr("style", "border-color: red;");
    $("#signup-username").attr("placeholder", "Please enter a username");
  }

  if (password.length < 8) {
    $("#signup-password").attr("style", "border-color: red;");
    $("#signup-password").attr("placeholder", "Please enter a valid password");
    return;
  }

  if (user_name && password) {
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({ user_name, password }),
      headers: { "Content-Type": "application/json" },
    });

    const signData = await response.json();
    if (response.status === 400 || response.status === 404) {
      return alert(signData.message);
    }
    if (response.ok) {
      //replaces current page with home page
      document.location.replace("/");
    } else {
      return alert(
        "Username already exist in our database. Try another Username."
      );
    }
  }
};
$("#signup-btn").click(signUpHandler);
