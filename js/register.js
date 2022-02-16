let first_name = document.getElementById("first_name");
let last_name = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let profile_image = document.getElementById("profile_image");
let signup_btn = document.getElementById("signup_btn");
let upload_image = document.getElementById("upload_image");

const api = "http://localhost/facebook_mockup/backend/auth/signup.php";

async function signup() {
  const form_data = new FormData();
  form_data.append("first_name", first_name.value);
  form_data.append("last_name", last_name.value);
  form_data.append("email", email.value);
  form_data.append("password", password.value);
  form_data.append("profile_image", profile_image.files[0]);

  let response = await fetch(api, {
    method: "POST",
    body: form_data,
  });
  let result = await response.json();
  console.log(result);
  if (result.status) {
    location.replace("login.html");
  } else {
    profile_image.value = "";
    upload_image.innerHTML = `<img src="./assets/ ${result.profile_path}" />`;
  }
}
signup_btn.addEventListener("click", () => {
  signup();
});
