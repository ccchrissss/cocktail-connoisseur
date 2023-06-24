// ***** Me *****

//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

document.querySelector('#cocktail-picker-button').addEventListener('click', doTheThing)

function filterByPosition(array, element, position) {
    return array.filter(innerArray => innerArray[position].includes(element) == true);
}

function getDrink() {
    let drink = document.querySelector('#cocktail-picker-input').value
    const instructionsP = document.createElement('p')
    // const ingredientsP = document.createElement('p')

    fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)


            document.querySelector('#cocktail-picker-image').src = data.drinks[0].strDrinkThumb
            document.querySelector('#cocktail-name').insertAdjacentHTML('beforeend', `: ${data.drinks[0].strDrink}`)
            document.querySelector('#glass-type').insertAdjacentHTML('beforeend', `: ${data.drinks[0].strGlass}`)

            // document.querySelector('#ingredients').insertAdjacentElement('afterend', ingredientsP)
            // ingredientsP.setAttribute('id', 'ingredients-paragraph')
            // document.querySelector('#ingredients-paragraph').insertAdjacentHTML('afterbegin', `${data.drinks[0].strIngredient1}`)

            // ingredientsLooper()
            
            document.querySelector('#instructions').insertAdjacentElement('afterend', instructionsP)
            instructionsP.setAttribute('id', 'instructions-paragraph')
            document.querySelector('#instructions-paragraph').insertAdjacentHTML('beforebegin', data.drinks[0].strInstructions )

            // let i = 1
            // let ingredientNumber = 'strIngredient' + i

            // do {
            //     console.log('this is the ingredient: ', data.drinks[0].ingredientNumber)
            //     i++
            //     ingredientNumber = 'strIngredient' + i
            // } while (data.drinks[0].ingredientNumber !== null && i < 50)
            // let ingredientsArr = Object.keys(data.drinks[0]).filter(  => { return str.includes('Ingredient')} )
            // let ingredientsArr = Object.entries(data.drinks[0]).filter( filterByPosition() )

            let ingredientsArr = filterByPosition(Object.entries(data.drinks[0]), 'Ingredient', 0)
            let measureArr = filterByPosition(Object.entries(data.drinks[0]), 'Measure', 0)
            let ingredientsUl = document.querySelector('#ingredients-list')

            // console.log(Object.entries(data.drinks[0]))
            // console.log('ingredientsArr: ', ingredientsArr)

            for (let i = 0; ingredientsArr[i][1] !== null; i++) {
                let ingredientsLi = document.createElement("li");

                measureArr[i][1] == null 
                ? ingredientsArr.innerHTML = ingredientsArr[i][1]
                : ingredientsArr.innerHTML = measureArr[i][1] + ingredientsArr[i][1]

                // ingredientsLi.innerHTML = measureArr[i][1] + ingredientsArr[i][1]
                ingredientsLi.innerHTML = `${measureArr[i][1]} ${ingredientsArr[i][1]}`
                ingredientsUl.appendChild(ingredientsLi);
            }

            // console.log('ok thsi is ingredientsArr: ', ingredientsArr)
            // const ingredientsLi = document.createElement('li')
           
            // for (let i = 0; i < ingredientsArr.length; i++) {
            //     // ingredientsLi.setAttribute('id', `${ingredientsArr[i]}`)
            //     // document.querySelector(`#${ingredientsArr[i]}`).innerHTML = ingredientsArr[i]

            //     console.log('and this is ingredientsArr[i]: ', ingredientsArr[i])

            //     document
            //         .querySelector('#ingredients-list')
            //         .appendChild(ingredientsLi)
            //         .setAttribute('id', `hello-please${i}`)

            //     document.querySelector(`#hello-please${i}`).innerHTML = ingredientsArr[i]

            // }

        })
}

function doTheThing() {
    getDrink()
    // ingredientsLooper()
}


// function ingredientsLooper() {
//     let i = 1
//     let ingredientNumber = 'strIngredient' + i
//     console.log(ingredientNumber)

//     // do {

//     // } while (strIngredient)
//     const ingredientsLi = document.createElement('li')

//     // add  adjacent element strIngredient1 

//     document.querySelector('#ingredients-list').insertAdjacentElement('beforeend', ingredientsLi)
//     document.querySelector('li').innerHTML = data.drinks[0].strIngredient1


// }

















// console.log(data.drinks[0])
// document.querySelector('h2').innerHTML = data.drinks[0].strDrink
// document.querySelector('img').src = data.drinks[0].strDrinkThumb
// document.querySelector('h3').innerHTML = data.drinks[0].strInstructions
