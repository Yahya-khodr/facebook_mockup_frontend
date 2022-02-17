let newpost_input = document.getElementById("newpost_input");
let created_by = localStorage.getItem("user_id");
let first_name = localStorage.getItem("first_name");
let last_name = localStorage.getItem("last_name");
let profile_image = localStorage.getItem("profile_image");
let post_button = document.getElementById("post_button");
let post_user = document.getElementById("post_user");
let post_content = document.getElementById("post_content");
const postAPI =
  "http://localhost/facebook_mockup/backend/status/add_status.php";

async function postStatus() {
  let res = await fetch(postAPI, {
    method: "POST",
    body: new URLSearchParams({
      post_content: newpost_input.value,
      created_by: created_by,
    }),
  });
  let data = await res.json();
  feed.innerHTML += ` <div class="post">
  <div class="post_header">
    <div class="user_icon">

      <img class="profile_image" src="assets/cached/${profile_image}" alt="" />
    </div>
    <div class="post_info">
      <h3 id="post_user">${first_name} ${last_name}</h3>
      <p>25 April at 20:30</p>
    </div>
  </div>

  <div class="post_msg">
    <p id="post_content">${newpost_input.value}</p>
  </div>

  <!-- <div class="post__image">
    <img src="./assets/gradient.jpg" alt="" />
  </div> -->

  <div class="post_footer">
    <div class="post_like">
      <span class="material-icons"> thumb_up </span>
      <p>Like</p>
    </div>


  </div>
</div>`;
  console.log(data);
}

post_button.addEventListener("click", () => {
  postStatus();
  
});
