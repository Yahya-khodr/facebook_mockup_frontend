let first_name = document.getElementById("first_name");
let last_name = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let profile_image = document.getElementById("profile_image");
let signup_btn = document.getElementById("signup_btn");

const api = "http://localhost/facebook_mockup/backend/auth/signup.php";

async function createAccount() {
  let res = await fetch(api, {
    method: "POST",
    body: new URLSearchParams({
      first_name: first_name,
      last_name: last_name,
      email: email,
      password: password,
      profile_image: profile_image,
    }),
  });
  let data = await res.json();
  if (data.status) {
    location.replace("login.html");
  }
  console.log(data.status);
}

signup_btn.addEventListener("click", () => {
  createAccount();
});
