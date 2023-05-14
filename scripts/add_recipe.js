const recipeTitleEl = document.getElementById("recipe_title");
const recipeInfoEl = document.getElementById("recipe_info");
const ingredientListEl = document.getElementById("ingredient_list");
const directionsEl = document.getElementById("directions");
const submitBtnEl = document.getElementById("submit_button");
var recipes_display = document.getElementsByClassName("collapsible");
var recipe = [];

$(function () {
  console.log("ready function called");

  if (!localStorage.recipe_data) {
    localStorage.recipe_data = [];
  } else {
    recipe = JSON.parse(localStorage.recipe_data);
  }

  console.log(recipe.length);

  //THIS SHOULD HAPPEN ON NEW RECIPE PAGE
  $("#submit_button").on("click", function () {
    console.log("entering submit button click function...");
    alert("Recipe added!");

    var add_recipe = {
      recipe_title: recipeTitleEl.value,
      recipe_info: recipeInfoEl.value,
      ingredient_list: ingredientListEl.value,
      directions: directionsEl.value,
    };
    recipe.push(add_recipe);
    console.log("recipe length: " + recipe.length);
    localStorage.recipe_data = JSON.stringify(recipe);

    recipeTitleEl.value = "";
    recipeInfoEl.value = "";
    ingredientListEl.value = "";
    directionsEl.value = "";

    console.log("reset values. All done on New Recipe Page!!!!");
  });
});

function render(data) {
  console.log("started render");
  const new_recipe_section = document.createElement("div"); //ADD STYLING CLASS FOR THIS LATER

  const new_recipe_button = document.createElement("button");
  new_recipe_button.setAttribute("class", "collapsible");
  console.log(new_recipe_button.classList); //Not Necessary After Testing is Done
  new_recipe_button.textContent = data.recipe_title;

  const new_recipe_content = document.createElement("div");
  new_recipe_content.setAttribute("class", "content");

  const r_info = document.createElement("textarea");
  const r_ingredients = document.createElement("textarea");
  const r_directions = document.createElement("textarea");
  r_info.textContent = data.recipe_info;
  r_ingredients.textContent = data.ingredient_list;
  r_directions.textContent = data.directions;

  new_recipe_content.appendChild(r_info);
  new_recipe_content.appendChild(r_ingredients);
  new_recipe_content.appendChild(r_directions);

  new_recipe_section.appendChild(new_recipe_button);
  new_recipe_section.appendChild(new_recipe_content);

  document.getElementById("recipe_list").prepend(new_recipe_section);

  console.log("finifhsed rendering recipe!");
}

function load_my_recipes() {
  $(function () {
    console.log("moved to My Recipes. Didn't load render yet!");
    for (var i = 0; i < recipe.length; i++) {
      console.log(
        "i am in the for loop. looping through stored recipes to load them on the page... "
      );
      console.log("recipe lsength: " + recipe.length);
      render(recipe[i]);
    }

    console.log("collapsible length anrya" + recipes_display.length);

    for (var i = 0; i < recipes_display.length; i++) {
      recipes_display[i].addEventListener("click", function () {
        console.log("clicked!!!!!");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
    // return true;
  });
}
