let user_id = localStorage.getItem("user_id");
let users_list = document.getElementById("users_list");

const usersAPI =
  "http://localhost/facebook_mockup/backend/auth/get_users.php?user_id=";

async function getUsers(id) {
  let response = await fetch(usersAPI + id);
  let result = await response.json();
  console.log(typeof result);

  for (var i = 0; i < result.length; i++) {
    users_list.innerHTML += `<div id="user" class="user">
    <div id="users_info" class="user_info">
        <img src="./assets/cached/${result[i]["profile_image"]}" class="user_info-img" />
        <h3>${result[i]["first_name"]} ${result[i]["last_name"]}</h3>
    </div>
    <div class="decision">
        <a href><span class="material-icons add"> person_add </span></a>
        <a href><span class="material-icons blocked"> block </span></a>
    </div>

</div>`;
  }
}
window.onload = getUsers(user_id);
