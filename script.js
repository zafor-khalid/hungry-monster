fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=beef')
    .then(res => res.json())
    .then(data => {
        console.log(data.meals[3].strMeal);
        for (const iterator of data.meals) {
            console.log(iterator);
        }
    })



function searchMeal() {
    const searchFood = document.getElementById('food');
    // document.getElementById('preDisplay').style.display = 'none';
    document.getElementById('resultParent').innerHTML = '';
    console.log(searchFood.value);
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchFood.value;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            data.meals.forEach(food => {
                // console.log(foodName.strMeal);

                const newElement = document.createElement('div');
                newElement.classList.add('col-3', 'card', 'foodCard', 'm-2', 'p-0', 'mt-4', 'rounded-5');
                newElement.style.width = '18rem';
                newElement.innerHTML = `
           
           <img src="${food.strMealThumb}" class="card-img-top" alt="...">
           <div class="card-body text-center">
             <h3 class="card-text">${food.strMeal}</h3>
           </div>
           
           `;
                document.getElementById('resultParent').appendChild(newElement);

            });
        })
}


