let newpost_input = document.getElementById("newpost_input");
let created_by = localStorage.getItem("user_id");
let first_name = localStorage.getItem("first_name");
let last_name = localStorage.getItem("last_name");
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

  console.log(data);
}
post_button.addEventListener("click", () => {
  postStatus();
  fetchPost();
});
