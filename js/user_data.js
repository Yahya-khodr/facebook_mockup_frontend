let user_id = localStorage.getItem("user_id");

let username = document.getElementById("username");
// let user_icon = document.getElementById("user_icon");
let user_icon = document.getElementsByClassName("user_icon");
let user_profile = document.getElementById("user_profile");

const userAPI =
  "http://localhost/facebook_mockup/backend/auth/get_user.php?user_id=";

async function getUserById() {
  let response = await fetch(userAPI + user_id);
  let result = await response.json();
  username.textContent = `${result.first_name} ${result.last_name}`;
  for (var i = 0; i < user_icon.length; i++) {
    user_icon[i].innerHTML =
      '<img class="profile_image" src="./assets/cached/' +
      result.profile_image +
      '"  />';
    user_profile.innerHTML = ` <div>
     <p class="name">${result.first_name}</p>
     <a href="#">See your profile</a>
   </div>`;
  }
  localStorage.setItem("first_name", result.first_name);
  localStorage.setItem("last_name", result.last_name);
  // user_icon.style.backgroundImage = `url(./assets/cached/${result.profile_image})`;
}

window.onload = getUserById();
