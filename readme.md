# Cocktail Connoisseur
Have you ever looked up a drink recipe only to be inundated with paragraphs upon paragraphs of flowery prose, aggressive popups urging you to strongly consider joining their newsletter just in time for summer cocktail season, and a 5-paragraph essay about the creator's unique qualifications to concoct such carefully-crafted recipes? 

Introducing **Cocktail Connoisseur**! A cocktail recipe web app without all the excess. This app lets you easily search for cocktails, or pick from a few hand-selected varieties if you're looking for something new. No popups, stories, or poetic waxings to be found.

**Link to project:** https://cocktailconnoisseur.netlify.app


<img width="1440" alt="Screenshot 2024-01-25 at 3 12 21 PM" src="https://github.com/ccchrissss/cocktail-connoisseur/blob/main/images/cocktail-connoisseur-demo-pic-1.png">



## How It's Made:

**Tech used:** JavaScript, HTML, CSS, TheCocktailDB API

I created **Cocktail Connoisseur** as a sleek, single-page website to inspire users to mix up delectable drinks. The landing page prominently displays the app's main feature: The Cocktail Picker. Users are first prompted to enter their cocktail of choice in the input box. This triggers the getDrink() function which fetches a variety of data from TheCocktailDB API. A function called filterByPosition() is used to provide only the desired elements from the arrays of ingredients and their respective measures. The HTML is then dynamically updated with the relevant information from the searched cocktail. The user is finally provided with an image, official name, ingredients list, and instructions to craft their desired libation. 

Further down the page, we have a carousel of hand-selected cocktails to inspire the user to try something new. They can then click the heading that lies in a given image, and they'll be brought back up to the recipe section which will dynamically update to show the new cocktail information.


## Lessons Learned:

One important lesson I learned in this project is 'test test test!' Using an API opens up the opportunity for many edge case issues that can be difficult to predict until they're staring right at you. One such issue is having 'null' appear as the unit measure inside the ingredients list for a chosen cocktail. 

## Future Improvements:

**Unit Switcher:** Some cocktail measures are shown in US customary units while others are shown in metric units. Adding a toggle to switch between units would increase usability of the app and widen its appeal.
**Cocktail Variations** TheCocktailDB API includes many twists on classic cocktails. Currently, the user can only access these other recipes if they happen to know the name of these specific variations. This optimization would provide the user with a list of alternative recipes of the chosen cocktail for them to explore.

