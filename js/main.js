const meals = [
    {
        name: "Lasagna Bolognese",
        desc: "Layered Italian pasta with rich meat sauce and béchamel",
        difficulty: "Intermediate",
        category: "Italian",
        isExtendPrepation: true,
        imageSrc: "../assets/photo-1546069901-ba9599a7e63c.jfif",
        rate: "4.5",
        numberReviews: "878",
        prepTime: "30 Min",
        cookTime: "45 Min",
        servings: "9 People",

        ingredients: [
            "Pasta Sheets",
            "Ground Beef",
            "Mozzarella Cheese",
            "Tomato Sauce",
            "Pasta Sheets",
            "Ground Beef",
            "Mozzarella Cheese",
            "Tomato Sauce"
        ],

        instructions: [
            "Prepare the meat sauce",
            "Boil pasta sheets",
            "Layer pasta and sauce",
            "Bake for 45 minutes",
            "Prepare the meat sauce",
            "Boil pasta sheets",
            "Layer pasta and sauce",
            "Bake for 45 minutes"
        ],

        nutrition: {
            calories: "650",
            protein: "35g",
            carbohydrates: "50g",
            fat: "30g",
            fiber: "6g",
            sodium: "700mg"
        },

        chefTips: [
            "Use fresh parmesan cheese",
            "Let lasagna rest before serving",
            "Use fresh parmesan cheese",
            "Let lasagna rest before serving"
        ]
    },

    {
        name: "Chicken Alfredo",
        desc: "Creamy pasta with grilled chicken breast",
        difficulty: "Easy",
        category: "Italian",
        isExtendPrepation: false,
        imageSrc: "../assets/photo-1546793665-c74683f339c1.jfif",
        rate: "4.8",
        numberReviews: "520",
        prepTime: "15 Min",
        cookTime: "20 Min",
        servings: "4 People",

        ingredients: [
            "Chicken Breast",
            "Pasta",
            "Cream",
            "Parmesan",
            "Chicken Breast",
            "Pasta",
            "Cream",
            "Parmesan"
        ],

        instructions: [
            "Cook pasta",
            "Prepare Alfredo sauce",
            "Grill chicken",
            "Mix everything together",
            "Cook pasta",
            "Prepare Alfredo sauce",
            "Grill chicken",
            "Mix everything together"
        ],

        nutrition: {
            calories: "520",
            protein: "40g",
            carbohydrates: "45g",
            fat: "22g",
            fiber: "4g",
            sodium: "500mg"
        },

        chefTips: [
            "Use heavy cream",
            "Serve immediately",
            "Use heavy cream",
            "Serve immediately",
            "Use heavy cream",
            "Serve immediately"

        ]
    },

    {
        name: "Margherita Pizza",
        desc: "Classic pizza with mozzarella and basil",
        difficulty: "Medium",
        category: "Pizza",
        isExtendPrepation: true,
        imageSrc: "../assets/photo-1574071318508-1cdbab80d002.jfif",
        rate: "4.9",
        numberReviews: "920",
        prepTime: "40 Min",
        cookTime: "15 Min",
        servings: "6 People",

        ingredients: [
            "Pizza Dough",
            "Mozzarella",
            "Tomato Sauce",
            "Fresh Basil",
            "Pizza Dough",
            "Mozzarella",
            "Tomato Sauce",
            "Fresh Basil"
        ],

        instructions: [
            "Prepare the dough",
            "Spread tomato sauce",
            "Add cheese",
            "Bake pizza",
            "Prepare the dough",
            "Spread tomato sauce",
            "Add cheese",
            "Bake pizza"
        ],

        nutrition: {
            calories: "480",
            protein: "18g",
            carbohydrates: "55g",
            fat: "16g",
            fiber: "3g",
            sodium: "620mg"
        },

        chefTips: [
            "Preheat oven well",
            "Use fresh basil after baking",
            "Preheat oven well",
            "Use fresh basil after baking",
            "Preheat oven well",
            "Use fresh basil after baking",

        ]
    }
];

let currentMealIndex = 0;

const recipeImage = document.querySelector(".image img");

const rate = document.getElementById("rate");
const reviews = document.getElementById("reviews");

const prepTimeDisplay = document.getElementById("prep-time-display");
const cookTimeDisplay = document.getElementById("cook-time-display");
const servingsDisplay = document.getElementById("servings-display");

const difficultyBadge = document.getElementById("difficulty-badge");
const categoryBadge = document.getElementById("category-badge");

const recipeName = document.getElementById("recipe-name");
const recipeDescription = document.getElementById("recipe-description");

const timeWarning = document.getElementById("time-warning");

const ingredientsUl = document.getElementById("Ingredients-ul");

const caloriesValue = document.getElementById("calories-value");
const proteinValue = document.getElementById("protein-value");
const carbohydratesValue =
    document.getElementById("carbohydrates-value");

const fatValue = document.getElementById("fat-value");
const fiberValue = document.getElementById("fiber-value");
const sodiumValue = document.getElementById("sodium-value");

const chefTipsContainer = document.getElementById("chef-tips-ul");
const tryAnotherBtn = document.getElementById("try-another-btn");

function displayMeal(index) {

    const meal = meals[index];
    recipeImage.src = meal.imageSrc;
    rate.textContent = meal.rate;
    reviews.textContent = meal.numberReviews;
    prepTimeDisplay.textContent = meal.prepTime;
    cookTimeDisplay.textContent = meal.cookTime;
    servingsDisplay.textContent = meal.servings;
    difficultyBadge.textContent = meal.difficulty;
    categoryBadge.textContent = meal.category;
    recipeName.textContent = meal.name;
    recipeDescription.textContent = meal.desc;
    timeWarning.style.display = meal.isExtendPrepation ? "flex" : "none";

    let ingredientsHtml = "";

    meal.ingredients.forEach((item, index) => {

        ingredientsHtml += `
        <li class="ingredient-item">
            <div class="ingredient-number">
                ${index + 1}
            </div>
            <p>
                ${item}
            </p>
        </li>`;
    });

    document.getElementById("Ingredients-ul").innerHTML =ingredientsHtml;

    let instructionsHtml = "";

    meal.instructions.forEach((item, index) => {
        instructionsHtml += `
        <li class="instructions-item">
            <div class="instructions-number">
                ${index + 1}
            </div>
            <p>
                ${item}
            </p>
        </li>
        `;
    });

    document.getElementById("Instructions-ul").innerHTML =instructionsHtml;

    caloriesValue.textContent = meal.nutrition.calories;
    proteinValue.textContent = meal.nutrition.protein;
    carbohydratesValue.textContent = meal.nutrition.carbohydrates;
    fatValue.textContent = meal.nutrition.fat;
    fiberValue.textContent = meal.nutrition.fiber;
    sodiumValue.textContent = meal.nutrition.sodium;

    let chefTipsHtml = "";

    meal.chefTips.forEach((item, index) => {
        chefTipsHtml += `
        <li class="chefTips-item">
            <div class="chefTips-icon">
               <i class="fa fa-circle-check"></i>
            </div>
            <p>
                ${item}
            </p>
        </li>`;
    });

    chefTipsContainer.innerHTML = chefTipsHtml;
}

displayMeal(currentMealIndex);

tryAnotherBtn.addEventListener("click", function () {

    currentMealIndex++;

    if (currentMealIndex >= meals.length) {

        currentMealIndex = 0;
    }

    displayMeal(currentMealIndex);
});