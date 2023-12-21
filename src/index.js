function displayRecipe(response) {
  console.log("generating recipe");

  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: "",
    delay: 1,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "6c4a1fa1oe455fb969c4b3876f90t341";
  let context =
    "Your are a very knowledgeable AI Assistant that knows and cooks fast and very tasty recipes.Please provide with a healthy and fast recipe and make sure to follow the user instruction. The recipe must be provided in HTML format. Example: <p>this is a recipe</p>";
  let prompt = `Generate a short,healthy and very tasty recipe with ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating recipe");
  console.log(`Prompt:${prompt}`);
  console.log(`Context: ${context}`);

  let recipeElement = document.querySelector("#recipe");
  recipeElement.classList.remove("hidden");
  recipeElement.innerHTML = `<div class="generating">⏳ Creating the recipe with ${instructionsInput.value}</div>`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
