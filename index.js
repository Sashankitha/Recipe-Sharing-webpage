document.getElementById("recipeForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const recipeName = document.getElementById("recipeName").value.trim();
  const recipeDescription = document.getElementById("recipeDescription").value.trim();

  if (recipeName === "" || recipeDescription === "") {
      alert("Please fill in both fields.");
      return;
  }

  const recipeList = document.getElementById("recipeList");

  const listItem = document.createElement("li");
  listItem.innerHTML = `
      <div class="recipe-name">${recipeName}</div>
      <div class="recipe-description">${recipeDescription}</div>
  `;

  recipeList.appendChild(listItem);

  // Clear form inputs
  document.getElementById("recipeName").value = "";
  document.getElementById("recipeDescription").value = "";
});
