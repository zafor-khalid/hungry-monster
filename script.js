function searchMeal() {
    const searchFood = document.getElementById('food');
    document.getElementById('resultParent').innerHTML = '';
    document.getElementById('details').innerHTML = '';
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=' + searchFood.value;
    fetch(url)
        .then(res => res.json())
        .then(data => {
            displayFood(data);
            foodIngredient(data);
        })
}


function displayFood(data) {
    data.meals.forEach(food => {
        const newElement = document.createElement('div');
        newElement.classList.add('col-3', 'card', 'foodCard', 'm-2', 'p-0', 'mt-4', 'rounded-5');
        newElement.style.width = '18rem';
        newElement.innerHTML = `
        <a href="#"  style="text-decoration: none; color: black;">
   <img src="${food.strMealThumb}" class="card-img-top" alt="...">
   <div class="card-body text-center bg-warning ">
     <h3 class="card-text">${food.strMeal}</h3>
   </div>
   </a>`;
        document.getElementById('resultParent').appendChild(newElement);

    });
}


function foodIngredient(data) {
    const addEvent = document.getElementById('resultParent');
    addEvent.addEventListener('click', function () {
        document.getElementById('details').innerHTML = '';
        let i = 1
        const foodName = event.target.parentNode.innerText;
        data.meals.forEach(element => {
            if (element.strMeal === foodName) {
                const newElement = document.createElement('div');
                newElement.classList.add('col-6', 'card', 'foodCard', 'm-2', 'p-0', 'mt-4', 'rounded-5');
                newElement.style.width = '22rem';
                newElement.innerHTML = `
                    <img src=${element.strMealThumb} >
                    <div class="card-body">
                    <h3 class="card-text">${element.strMeal}</h3>
                    <ul id="ingredients">
                    </ul>
                    </div>`;

                document.getElementById('details').appendChild(newElement);
                while (i != 10) {
                    let ingredient = 'strIngredient' + (i++);
                    if (element[ingredient] == '')
                        continue;
                    const newItem = document.createElement('li');
                    newItem.innerText = element[ingredient];
                    document.getElementById('ingredients').appendChild(newItem);
                }
            }
        });


    })
}
