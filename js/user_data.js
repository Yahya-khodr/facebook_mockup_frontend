let user_id = localStorage.getItem("user_id");

let username = document.getElementById("username");
const userAPI =
  "http://localhost/facebook_mockup/backend/auth/get_user.php?user_id=";

async function getUserById() {
  let response = await fetch(userAPI + user_id);
  let result = await response.json();
  username.textContent = `${result.first_name} ${result.last_name}`;
}

window.onload = getUserById();
