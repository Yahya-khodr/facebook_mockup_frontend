let friends_list = document.getElementById("friends_list");
let user_id = localStorage.getItem("user_id");

const api =
  "http://localhost/facebook_mockup/backend/friends/get_friends.php?user_id=";

async function getFriends(id) {
  let res = await fetch(api + id);
  let result = await res.json();

  if (result.length != 0) {
    for (var i = 0; i < result.length; i++) {
      friends_list.innerHTML += `<div class="friend">
        <div class="friend_info">
            <img src="./assets/cached/${result[i]["profile_image"]}" class="friend_info-img" />
            <h3>${result[i]["first_name"]} ${result[i]["last_name"]}</h3>
        </div>
        <div class="decision">
            <a href><span class="material-icons blocked"> block </span></a>
        </div>

    </div>`;
    }
  }
}

window.onload = getFriends(user_id);
