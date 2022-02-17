let feed = document.getElementById("feed");

const api =
  "http://localhost/facebook_mockup/backend/status/get_all_status.php";

async function fetchPost() {
  let res = await fetch(api);
  let result = await res.json();
  if (result.length != 0) {
    for (var i = 0; i < result.length; i++) {
      feed.innerHTML += ` <div class="post">
                    <div class="post_header">
                    <div class="user_icon">

                        <img class="profile_image" src="assets/cached/${result[i]["profile_image"]}" alt="" />
                    </div>
                    <div class="post_info">
                        <h3 id="post_user">${result[i]["first_name"]} ${result[i]["last_name"]}</h3>
                        <p>${result[i]["created_at"]}</p>
                    </div>
                    </div>

                    <div class="post_msg">
                    <p id="post_content">${result[i]["post_content"]}</p>
                    </div>


                    <div class="post_footer">
                    <div class="post_like">
                        <span class="material-icons"> thumb_up </span>
                <p>Like</p>
                </div>

            </div>
        </div> `;
    }
  }
}

// fetchPost();
