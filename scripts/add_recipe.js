const recipeTitleEl = document.getElementById("recipe_title");
const recipeInfoEl = document.getElementById("recipe_info");
const ingredientListEl = document.getElementById("ingredient_list");
const directionsEl = document.getElementById("directions");
const submitBtnEl = document.getElementById("submit_button");
var coll = document.getElementsByClassName("collapsible");

function render(data) {
  console.log("started render");
  // var new_recipe_html ='<button class="collapsible">'+data.recipe_title+'</button><div class="content"><p>'+data.recipe_info+'</p><p>'+data.ingredient_list+'</p><p>'+data.directions+'</p></div>';

  const single_recipe = document.createElement("div");

  const buttontesting1 = document.createElement("button");
  buttontesting1.setAttribute("class", "collapsible");
  console.log(buttontesting1.classList);
  buttontesting1.textContent = recipe_title.value;

  const recipetestinginfo = document.createElement("div");
  recipetestinginfo.setAttribute("class", "content");

  const r_info = document.createElement("textarea");
  const r_ingredients = document.createElement("textarea");
  const r_directions = document.createElement("textarea");
  r_info.textContent = recipe_info.value;
  r_ingredients.textContent = ingredient_list.value;
  r_directions.textContent = directions.value;

  recipetestinginfo.appendChild(r_info);
  recipetestinginfo.appendChild(r_ingredients);
  recipetestinginfo.appendChild(r_directions);

  single_recipe.appendChild(buttontesting1);
  single_recipe.appendChild(recipetestinginfo);

  document.getElementById("div1").append(single_recipe);

  console.log("finifhsed render");
}

$(function () {
  console.log("ready function called");
  var recipe = [];
  console.log("recipe length: " + recipe.length);

  if (!localStorage.recipe_data) {
    localStorage.recipe_data = [];
  } else {
    recipe = JSON.parse(localStorage.recipe_data);
  }

  for (var i = 0; i < recipe.length; i++) {
    console.log("i am in the for loop. heehe ");
    console.log("recipe length: " + recipe.length);
    render(recipe[i]);
  }
  console.log("The DOM is now loaded and can be manipulated.");

  $("#submit_button").on("click", function () {
    console.log("hello1");
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
    render(add_recipe);

    recipeTitleEl.value = "";
    recipeInfoEl.value = "";
    ingredientListEl.value = "";
    directionsEl.value = "";

    console.log("reset values");
    console.log("collapsible length anrya" + coll.length);

    for (var i = 0; i < coll.length; i++) {
      coll[i].addEventListener("click", function () {
        console.log(coll.length);
        console.log("clicked!!!!!");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + "px";
        }
      });
    }
  });
});
// $("#submit_button").on("click",function() {

//     console.log("function called");
//     var recipe = [];
//     console.log("recipe length: " + recipe.length);

//     if (!localStorage.recipe_data) {
//         localStorage.recipe_data = [];
//     }
//     else {
//         recipe = JSON.parse(localStorage.recipe_data);
//     }

//     for (var i = 0; i < recipe.length; i++) {
//         render(recipe[i]);
//     }
//     $( "p" ).text( "The DOM is now loaded and can be manipulated." );

//     console.log("hello1");
//     alert("Recipe added!");
//     console.log("recipe title: " + recipeTitleEl.value);
//     var add_recipe = {
//         "recipe_title": recipeTitleEl.value,
//         "recipe_info": recipeInfoEl.value,
//         "ingredient_list": ingredientListEl.value,
//         "directions": directionsEl.value,
//     };
//     recipe.push(add_recipe);
//     console.log("recipe length: " + recipe.length);
//     localStorage.recipe_data = JSON.stringify(recipe);
//     render(add_recipe);
// });
