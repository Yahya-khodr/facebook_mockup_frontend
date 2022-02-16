let first_name = document.getElementById("first_name");
let last_name = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");
let sample_image = document.getElementsByName("sample_image");
let upload_image = document.getElementById("uploaded_image");
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
profile_image.addEventListener("change", () => {
  upload_image(profile_image.files[0]);
});
signup_btn.addEventListener("click", () => {
  createAccount();
});

const upload_image = (file) => {
    
  // check file type

  if (!["image/jpeg", "image/png"].includes(file.type)) {
    upload_image.innerHTML =
      '<div class="alert alert-danger">Only .jpg and .png image are allowed</div>';

    sample_image[0].value = "";

    return;
  }

  // check file size (< 2MB)
  if (file.size > 2 * 1024 * 1024) {
    upload_image.innerHTML =
      '<div class="alert alert-danger">File must be less than 2 MB</div>';

   sample_image[0].value = "";
    return;
  }
}
