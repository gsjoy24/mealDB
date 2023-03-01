const loadMeals = (text) => {
	fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
		.then((res) => res.json())
		.then((data) => showMeals(data.meals));
	console.log(text);
};

const showMeals = (meals) => {
	const mealContainer = document.getElementById('meal-container');
	mealContainer.innerHTML = '';
	meals.forEach((meal) => {
		const { strMeal, strMealThumb, strTags, strCategory, strInstructions } = meal;
		mealContainer.innerHTML += `
         <div class="col">
            <div class="card h-100">
               <img src="${strMealThumb}" class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">${strMeal}</h5>
                  <p class="card-text">Category: ${strCategory ? strCategory : 'NO CATEGORY'}</p>
                  <p class="card-text">${strCategory ? strCategory : 'NO CATEGORY'}</p>
                  <p class="card-text">Tags: ${strTags ? strTags : 'No tags available'}</p>
               </div>
            </div>
         </div>
      `;
		// console.log(meal);
	});
};
const searchText = () => {
	const text = document.getElementById('search-field').value;
	loadMeals(text);
};
loadMeals('fish');
