const recipeTitleEl = document.getElementById("recipe_title");
const recipeInfoEl = document.getElementById("recipe_info");
const ingredientListEl = document.getElementById("ingredient_list");
const directionsEl = document.getElementById("directions");
const submitBtnEl = document.getElementById("submit_button");
var recipes_display = document.getElementsByClassName("collapsible");
var recipe = add_recipe;

// var coll = document.getElementsByClassName("collapsible");
// var i;

// for (i = 0; i < coll.length; i++) {
//   coll[i].addEventListener("click", function () {
//     var content = this.nextElementSibling;
//     if (content.style.maxHeight) {
//       content.style.maxHeight = null;
//     } else {
//       content.style.maxHeight = content.scrollHeight + "px";
//     }
//   });
// }

function render(data) {
  console.log("started render");
  const new_recipe_section = document.createElement("div"); //ADD STYLING CLASS FOR THIS LATER

  const new_recipe_button = document.createElement("button");
  new_recipe_button.setAttribute("class", "collapsible");
  console.log(new_recipe_button.classList); //Not Necessary After Testing is Done
  new_recipe_button.textContent = recipe_title.value;

  const new_recipe_content = document.createElement("div");
  new_recipe_content.setAttribute("class", "content");

  const r_info = document.createElement("textarea");
  const r_ingredients = document.createElement("textarea");
  const r_directions = document.createElement("textarea");
  r_info.textContent = recipe_info.value;
  r_ingredients.textContent = ingredient_list.value;
  r_directions.textContent = directions.value;

  new_recipe_content.appendChild(r_info);
  new_recipe_content.appendChild(r_ingredients);
  new_recipe_content.appendChild(r_directions);

  single_recipe.appendChild(new_recipe_button);
  single_recipe.appendChild(new_recipe_content);

  document.getElementById("div1").append(single_recipe);

  console.log("finifhsed render");
}

function load_my_recipes() {
  console.log("moved to My Recipes. Didn't load render yet!");
  for (var i = 0; i < recipe.length; i++) {
    console.log(
      "i am in the for loop. looping through stored recipes to load them on the page... "
    );
    console.log("recipe length: " + recipe.length);
    render(recipe[i]);
  }

  console.log("collapsible length anrya" + recipes_display.length);

  for (var i = 0; i < recipes_display.length; i++) {
    recipes_display[i].addEventListener("click", function () {
      console.log(recipes_display.length);
      console.log("clicked!!!!!");
      var content = this.nextElementSibling;
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
}
