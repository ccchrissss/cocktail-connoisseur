# Cocktail Connoisseur
Have you ever looked up a drink recipe only to be inundated with paragraphs upon paragraphs of flowery prose, aggressive popups urging you to strongly consider joining their newsletter just in time for summer cocktail season, and a 5-paragraph essay about the creator's unique qualifications to concoct such carefully-crafted recipes? 

Introducing **Cocktail Connoisseur**! A cocktail recipe web app without all the excess. This app lets you easily search for cocktails, or pick from a few hand-selected varieties if you're looking for something new. No popups, stories, or poetic waxings to be found.

**Link to project:** https://cocktailconnoisseur.netlify.app


<img width="1440" alt="Screenshot 2024-01-25 at 3 12 21 PM" src="https://github.com/ccchrissss/cocktail-connoisseur/blob/main/images/cocktail-connoisseur-demo-pic-1.png">



## How It's Made:

**Tech used:** JavaScript, HTML, CSS, TheCocktailDB API

I created **Cocktail Connoisseur** as a sleek, single-page website to inspire users to mix up delectable drinks. The landing page prominently displays the app's main feature: The Cocktail Picker. Users are first prompted to enter their cocktail of choice in the input box. This triggers the getDrink() function which fetches a variety of data from TheCocktailDB API. A function called filterByPosition() is used to provide only the desired elements from the arrays of ingredients and their respective measures. The HTML is then dynamically updated with the relevant information from the searched cocktail. The user is finally provided with an image, official name, ingredients list, and instructions to craft their desired libation. 

Further down the page, we have a carousel of hand-selected cocktails to inspire the user to try something new. They can then click the heading that lies in a given image, and they'll be brought back up to the recipe section which will dynamically update to show the new cocktail information.

## Optimizations
*(optional)*

You don't have to include this section but interviewers *love* that you can not only deliver a final product that looks great but also functions efficiently. Did you write something then refactor it later and the result was 5x faster than the original implementation? Did you cache your assets? Things that you write in this section are **GREAT** to bring up in interviews and you can use this section as reference when studying for technical interviews!

## Lessons Learned:

No matter what your experience level, being an engineer means continuously learning. Every time you build something you always have those *whoa this is awesome* or *wow I actually did it!* moments. This is where you should share those moments! Recruiters and interviewers love to see that you're self-aware and passionate about growing.

## Examples:
Take a look at these couple examples that I have in my own portfolio:

**Palettable:** https://github.com/alecortega/palettable

**Twitter Battle:** https://github.com/alecortega/twitter-battle

**Patch Panel:** https://github.com/alecortega/patch-panel
