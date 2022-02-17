let login_btn = document.getElementById("login_button");
let email = document.getElementById("login_email");
let password = document.getElementById("login_password");

const loginURL = "http://localhost/facebook_mockup/backend/auth/login.php";

async function loginApi() {
  let response = await fetch(loginURL, {
    method: "POST",
    body: new URLSearchParams({
      email: email.value,
      password: password.value,
    }),
  });
  let result = await response.json();

  if (result.status) {
    localStorage.setItem("user_id", result.id);
    location.replace("index.html");
  }
  console.log(result);
}

login_btn.addEventListener("click", () => {
  loginApi();
});
