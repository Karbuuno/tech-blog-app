const deletePost = async e => {
  e.preventDefault();
  const urlString = window.location.toString().split("/");
  const postId = urlString[4];

  const response = await fetch(`/api/post/${postId}`, {
    method: "DELETE",
  });

  const data = await response.json();
  if (response.ok) {
    alert("Post Deleted");
    document.location.replace("/dashboard");
  } else {
    alert("Something went wrong. Can't delete post");
  }
};

$("#delete-post").click(deletePost);
