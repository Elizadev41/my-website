const recipes = [
  {
     // Chocolate Chip Cookies
    name: "Chocolate Chip Cookies",
    time: "30 minutes",
    servings: "48 cookies",
    difficulty: "Easy",
     keywords: ["cookies", "chocolate chip cookies", "chocolate", 
    "dessert"],
     source:
   "https://www.allrecipes.com/recipe/10813/best-chocolate-chip-cookies/", 
    ingredients: [
      "1 cup softened butter",
      "1 cup white sugar",
      "1 cup packed brown sugar",
      "2 large eggs",
      "2 teaspoons vanilla extract",
      "1 teaspoon baking soda",
      "2 teaspoons hot water",
      "1/2 teaspoon salt",
      "3 cups all-purpose flour",
      "2 cups semisweet chocolate chips",
      "1 cup chopped walnuts, optional"
    ],
    steps: [
      "Preheat the oven to 350 degrees F.",
      "Cream the butter with both sugars until smooth.",
      "Mix in the eggs one at a time, then add the vanilla.",
      "Stir the baking soda into the hot water, then mix it into the dough with the salt.",
      "Add the flour, chocolate chips, and walnuts if using.",
      "Drop spoonfuls of dough onto a baking sheet.",
      "Bake for about 10 minutes, until the edges are lightly golden.",
      "Let the cookies cool before serving."
    ]
  },
 {
    // Brownies
    name: "Brownies",
    time: "45 minutes",
    servings: "16 brownies",
    difficulty: "Easy",

    keywords: ["brownies", "brownie", "chocolate", "fudgy", "dessert"],
    source: "https://www.allrecipes.com/recipe/10549/best-brownies/?kw=myrecipes",
    ingredients: [
      "1/2 cup butter",
      "1 cup white sugar",
      "2 large eggs",
      "1 teaspoon vanilla extract",
      "1/3 cup unsweetened cocoa powder",
      "1/2 cup all-purpose flour",
      "1/4 teaspoon salt",
      "1/4 teaspoon baking powder",
      "3 tablespoons softened butter for frosting",
      "3 tablespoons unsweetened cocoa powder for frosting",
      "1 tablespoon honey",
      "1 teaspoon vanilla extract for frosting",
      "1 cup confectioners' sugar"
    ],
    steps: [
      "Preheat the oven to 350 degrees F.",
      "Grease and flour an 8-inch square baking pan.",
      "Melt the butter, then mix in the sugar, eggs, and vanilla.",
      "Add the cocoa powder, flour, salt, and baking powder.",
      "Spread the batter into the pan.",
      "Bake for 25 to 30 minutes, until the top looks dry and the edges pull away from the pan.",
      "Mix the frosting ingredients until smooth.",
      "Frost the brownies while they are still slightly warm."
    ]
  },
  {
    // Banana Bread
    name: "Banana Bread",
    time: "1 hour 35 minutes",
    servings: "12 slices",
    difficulty: "Easy",
    keywords: ["banana bread", "banana", "bread", "loaf", "quick bread"],
    source: "https://www.allrecipes.com/recipe/15747/best-ever-banana-bread/",
    ingredients: [
      "2 large eggs, beaten",
      "1 cup mashed bananas",
      "1/2 cup vegetable oil",
      "1/3 cup buttermilk",
      "1 3/4 cups all-purpose flour",
      "1 1/2 cups white sugar",
      "1 teaspoon baking soda",
      "1/2 teaspoon salt",
      "1/2 cup chopped pecans, optional"
    ],
      steps: [
      "Preheat the oven to 325 degrees F.",
      "Grease a 9x5-inch loaf pan.",
      "Mix the eggs, mashed bananas, oil, and buttermilk in a large bowl.",
      "In another bowl, mix the flour, sugar, baking soda, and salt.",
      "Stir the dry ingredients into the banana mixture.",
      "Fold in pecans if using.",
      "Pour the batter into the loaf pan.",
      "Bake for about 1 hour and 20 minutes, until a toothpick comes out clean.",
      "Let it cool, then slice and serve."
    ]
  },
  {
    // Chocolate Cake
    name: "Chocolate Cake",
    time: "1 hour",
    servings: "12 servings",
    difficulty: "Medium",
    keywords: ["cake", "chocolate cake", "chocolate", "frosting", "dessert"],
    source: "https://www.allrecipes.com/recipe/17528/extreme-chocolate-cake/",
    ingredients: [
      "2 cups white sugar",
      "1 3/4 cups all-purpose flour",
      "3/4 cup unsweetened cocoa powder",
      "1 1/2 teaspoons baking soda",
      "1 1/2 teaspoons baking powder",
      "1 teaspoon salt",
      "2 large eggs",
      "1 cup milk",
      "1/2 cup vegetable oil",
      "2 teaspoons vanilla extract",
      "1 cup boiling water",
      "3/4 cup unsalted butter for frosting",
      "5 1/3 cups confectioners' sugar",
      "1 1/2 cups unsweetened cocoa powder for frosting",
      "2/3 cup milk for frosting",
      "1 teaspoon vanilla extract for frosting"
    ],
    steps: [
      "Preheat the oven to 350 degrees F.",
        "Grease and flour two 9-inch round cake pans.",
      "Mix the sugar, flour, cocoa powder, baking soda, baking powder, and salt.",
      "Add the eggs, milk, oil, and vanilla, then mix until smooth.",
      "Stir in the boiling water by hand.",
      "Pour the batter evenly into the cake pans.",
      "Bake for 30 to 35 minutes, until a toothpick comes out clean.",
      "Let the cakes cool completely.",
      "Beat the frosting ingredients until smooth.",
      "Frost between the cake layers and around the outside."
    ]
  },
  {
    // Pancakes
    name: "Pancakes",
    time: "20 minutes",
    servings: "8 servings",
    difficulty: "Easy",
    keywords: ["pancakes", "pancake", "breakfast", "fluffy pancakes"],
    source: "https://www.allrecipes.com/recipe/21014/good-old-fashioned-pancakes/",
    ingredients: [
      "1 1/2 cups all-purpose flour",
      "3 1/2 teaspoons baking powder",
      "1 tablespoon white sugar",
      "1/4 teaspoon salt",
      "1 1/4 cups milk",
      "3 tablespoons butter, melted",
      "1 large egg"
    ],
    steps: [
      "Mix the flour, baking powder, sugar, and salt in a large bowl.",
      "Add the milk, melted butter, and egg.",
      "Mix until the batter is smooth.",
      "Heat a lightly oiled pan or griddle over medium-high heat.",
      "Pour about 1/4 cup of batter for each pancake.",
      "Cook for 2 to 3 minutes, until bubbles form and the edges look dry.",
      "Flip and cook the other side until golden brown.",
      "Serve warm."
    ]
  }
];
const searchInput = document.getElementById("recipe-search");
const searchButton = document.getElementById("search-button");
const recipeResult = document.getElementById("recipe-result");


function showRecipe(recipe) {
  recipeResult.innerHTML = `
    <h2>${recipe.name}</h2>

    <div class="recipe-info">
      <p><strong>Time:</strong> ${recipe.time}</p>
      <p><strong>Servings:</strong> ${recipe.servings}</p>
      <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
    </div>

    <h3>Ingredients</h3>
    <ul>
      ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join("")}
    </ul>

    <h3>Steps</h3>
    <ol>
      ${recipe.steps.map(step => `<li>${step}</li>`).join("")}
    </ol>

    <p>
      <a href="${recipe.source}" target="_blank">View original recipe</a>
    </p>
  `;
}


function showRecipeList(matchedRecipes) {
  recipeResult.innerHTML = `
    <h2>${matchedRecipes.length} recipes found</h2>
    <div class="recipe-list">
      ${matchedRecipes.map(recipe => `
        <article class="recipe-card">
          <h3>${recipe.name}</h3>
          <p><strong>Time:</strong> ${recipe.time}</p>
          <p><strong>Servings:</strong> ${recipe.servings}</p>
          <p><strong>Difficulty:</strong> ${recipe.difficulty}</p>
          <p>${recipe.ingredients.length} ingredients - ${recipe.steps.length} steps</p>
          <p><a href="${recipe.source}" target="_blank" rel="noopener noreferrer">View original recipe</a></p>
        </article>
      `).join("")}
    </div>
  `;
}

function findRecipe() {
  const userSearch = searchInput.value.trim().toLowerCase();

  if (userSearch === "") {
    recipeResult.innerHTML = `
      <h2>What should we bake?</h2>
      <p>Try searching for cookies, brownies, banana bread, chocolate cake, or pancakes.</p>
    `;
    return;
  }

  const matchedRecipes = recipes.filter(recipe =>
    recipe.name.toLowerCase().includes(userSearch) ||
    recipe.keywords.some(keyword => keyword === userSearch || keyword.includes(userSearch))
  );

  if (matchedRecipes.length === 0) {
    recipeResult.innerHTML = `
      <h2>No recipe found</h2>
      <p>Try searching for cookies, brownies, banana bread, chocolate cake, or pancakes.</p>
    `;
    return;
  }

  if (matchedRecipes.length === 1) {
    showRecipe(matchedRecipes[0]);
  } else {
    showRecipeList(matchedRecipes);
  }
}


searchButton.addEventListener("click", findRecipe);


searchInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    findRecipe();
  }
});
