function generateRecipe(event) {
  event.preventDefault();

  let recipeElement =document.querySelector("#recipe");

    new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    cursor: null,
    delay: 1,
  });

  recipeElement.innerHTML = 
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener(`submit`, generateRecipe);
