const button = document.getElementById("searchBtn");
const input = document.getElementById("search");
const output = document.getElementById("output");

button.addEventListener("click", () => {
  const username = input.value.trim();
  console.log("Username: ", username);
  if (username === "") {
    output.textContent = "Please enter a username.";
    return;
  }

  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      console.log(data);

      output.innerHTML = `
      <h2>${data.login}</h2>
      <img src="${data.avatar_url}" alt="Avatar" width="100">
      <p><strong>Bio:</strong> ${data.bio ?? "No bio"}</p>
      <p><strong>Followers:</strong> ${data.follwers}</p>
      <p><strong>Following:</strong> ${data.following}</p>
      <p><a href="${data.html_url}" target="_blank">View profile</a></p>
      `
    });
})
