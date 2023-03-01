const loadMeals = (text) => {
	fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${text}`)
		.then((res) => res.json())
		.then((data) => showMeals(data.meals));
};

const showMeals = (meals) => {
	const mealContainer = document.getElementById('meal-container');
	mealContainer.innerHTML = '';
	meals.forEach((meal) => {
		const { strMeal, strMealThumb, strTags, strCategory, strInstructions, idMeal } = meal;
		mealContainer.innerHTML += `
         <div class="col">
            <div class="card h-100">
               <img src="${strMealThumb}" class="card-img-top" alt="..." />
               <div class="card-body">
                  <h5 class="card-title">${strMeal}</h5>
                  <p class="card-text">Category: ${strCategory ? strCategory : 'NO CATEGORY'}</p>
                  <p class="card-text">${strCategory ? strCategory : 'NO CATEGORY'}</p>
                  <p class="card-text">Tags: ${strTags ? strTags : 'No tags available'}</p>
						<button onclick="loadDetails('${idMeal}')" type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#mealDetail">
							Details
						</button>
               </div>
            </div>
         </div>
      `;
	});
};
const searchText = () => {
	const text = document.getElementById('search-field').value;
	loadMeals(text);
};

const loadDetails = (code) => {
	fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${code}`)
		.then((res) => res.json())
		.then((data) => showMealDetails(data.meals[0]));
};

const showMealDetails = (meal) => {
	const { strMeal, strMealThumb, strTags, strCategory, strInstructions } = meal;
	const modalContainer = document.getElementById('modal-container');
	modalContainer.innerHTML = `
	<div class="modal-content">
		<div class="modal-header">
			<h1 class="modal-title fs-5" id="mealDetailLabel">${strMeal}</h1>
			<button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
		</div>
		<div class="modal-body">
			<img src="${strMealThumb}"  />
			<p class="p-2">${strInstructions}</p>
			<p class="p-2">Tags: ${strTags ? strTags : 'No tags available'}</p>
			<p class="p-2">Category: ${strCategory ? strCategory : 'NO CATEGORY'}</p>

		</div>
		<div class="modal-footer">
			<button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
		</div>
	</div>
	`;
};
loadMeals('fish');
