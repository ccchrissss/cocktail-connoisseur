// ***** Me *****

//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM

const cocktailPickerButton = document.querySelector('#cocktail-picker-button')
const cocktailPickerInput = document.querySelector('#cocktail-picker-input')

cocktailPickerButton.addEventListener('click', getDrink)
cocktailPickerInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault()

        document.querySelector('#cocktail-picker-button').click()
    }
})



// Featured Cocktail Picker Function

const garibaldiNegroni = document.querySelector('#garibaldi-negroni')
const grimReaper = document.querySelector('#grim-reaper')
const b52 = document.querySelector('#b-52')
const ginLemon = document.querySelector('#gin-lemon')
const greyhound = document.querySelector('#greyhound')
const mountainBramble = document.querySelector('#mountain-bramble')
const thePhilosopher = document.querySelector('#the-philosopher')
const vampiro = document.querySelector('#vampiro')

function featuredCocktailPicker(cocktailName) { 
    // cocktailPickerInput.value = 'garibaldi negroni'
    cocktailPickerInput.value = cocktailName

    getDrink()
}

garibaldiNegroni.addEventListener('click', function() {
    featuredCocktailPicker('garibaldi negroni')
})

grimReaper.addEventListener('click', function() {
    featuredCocktailPicker('grim reaper')
})

b52.addEventListener('click', function() {
    featuredCocktailPicker('b-52')
})

ginLemon.addEventListener('click', function() {
    featuredCocktailPicker('gin lemon')
})

greyhound.addEventListener('click', function() {
    featuredCocktailPicker('greyhound')
})

mountainBramble.addEventListener('click', function() {
    featuredCocktailPicker('mountain bramble')
})

thePhilosopher.addEventListener('click', function() {
    featuredCocktailPicker('the philosopher')
})

vampiro.addEventListener('click', function() {
    featuredCocktailPicker('vampiro')
})







// // Get the input field
// var input = document.getElementById("myInput");

// // Execute a function when the user presses a key on the keyboard
// input.addEventListener("keypress", function(event) {
//   // If the user presses the "Enter" key on the keyboard
//   if (event.key === "Enter") {
//     // Cancel the default action, if needed
//     event.preventDefault();
//     // Trigger the button element with a click
//     document.getElementById("myBtn").click();
//   }
// });





function filterByPosition(array, element, position) {
    return array.filter(innerArray => innerArray[position].includes(element) == true);
}


// https://stackoverflow.com/questions/54791182/changing-the-display-of-an-element-via-javascript
function toggleSearchBar() {
    let recipeBox = document.querySelector('.recipe-box')
    let display = getComputedStyle(recipeBox).display;

    if (display == "none") {
        recipeBox.style.display = "block";
    }
}

function buttonScroller() {
    let element = document.querySelector('.cocktail-image-and-recipe')

    element.scrollIntoView({behavior: "smooth"});
}


function getDrink() {
    const cocktailPickerImage = document.querySelector('#cocktail-picker-image')
    let drink = document.querySelector('#cocktail-picker-input').value
    // const instructionsP = document.createElement('p')
    const cocktailName = document.querySelector('#cocktail-name')
    const glassType = document.querySelector('#glass-type')
    // const instructions =  document.querySelector('#instructions')!
    const instructionsParagraph = document.querySelector('#instructions-paragraph')


    fetch(`https://thecocktaildb.com/api/json/v1/1/search.php?s=${drink}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)


            cocktailPickerImage.src = data.drinks[0].strDrinkThumb

            cocktailName.innerHTML = ''
            cocktailName.insertAdjacentHTML('beforeend', `${data.drinks[0].strDrink}`)

            glassType.innerHTML = ''
            glassType.insertAdjacentHTML('beforeend', `${data.drinks[0].strGlass}`)
            
            toggleSearchBar()

            // instructions.insertAdjacentElement('afterend', instructionsP)
            // instructionsP.setAttribute('id', 'instructions-paragraph')
            instructionsParagraph.innerHTML = ''
            instructionsParagraph.innerHTML = data.drinks[0].strInstructions
            

            let ingredientsArr = filterByPosition(Object.entries(data.drinks[0]), 'Ingredient', 0)
            let measureArr = filterByPosition(Object.entries(data.drinks[0]), 'Measure', 0)
            let ingredientsUl = document.querySelector('#ingredients-list')

            ingredientsUl.innerHTML = ''
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

        buttonScroller()
}




// console.log(data.drinks[0])
// document.querySelector('h2').innerHTML = data.drinks[0].strDrink
// document.querySelector('img').src = data.drinks[0].strDrinkThumb
// document.querySelector('h3').innerHTML = data.drinks[0].strInstructions
