let searchbox = document.getElementsByClassName('search')[0];
let search = searchbox.value;

searchbox.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        search = searchbox.value;
        findrecipe(search);
    }
});

const findrecipe = async (search) => {
    document.getElementsByClassName('on-off')[0].innerHTML = '';
    document.getElementsByClassName('recipes')[0].innerHTML = '';
    document.getElementsByClassName('on-off')[0].style.height = '0';
    document.getElementsByClassName('recipes')[0].style.height = '95%';
    let response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
    let data = await response.json();
    for(let i = 0; i < data.meals.length; i++) {
        let meal = data.meals[i];
        let mealDiv = document.createElement('div');
        mealDiv.className = 'meal';
        mealDiv.innerHTML = `
            <img src="${meal.strMealThumb}"  alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
        `;
        document.getElementsByClassName('recipes')[0].appendChild(mealDiv);
    }
}