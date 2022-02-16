let user_id = localStorage.getItem("user_id");
let requests_list = document.getElementById("requests_list");

const api =
  "http://localhost/facebook_mockup/backend/friends/get_friend_requests.php?user_id=";

async function getFriendRequests(id) {
  let res = await fetch(api + id);
  let result = await res.json();
  if (result.length != 0) {
    for (var i = 0; i < result.length; i++) {
      requests_list.innerHTML += `<div class="request">
        <div class="requestor">
            <img src="./assets/cached/${result[i]["profile_image"]}" class="requestor-img" />
            <h3>${result[i]["first_name"]} ${result[i]["last_name"]}</h3>
        </div>
        <div class="decision">
            <a href=""><span class="material-icons accept"> check_circle_outline </span></a>
            <a href=""><span class="material-icons declined"> remove_circle_outline </span></a>
        </div>

    </div>`;
    }
  }
}

window.onload = getFriendRequests(user_id);
