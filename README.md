# `HELLO SOVOS!!!`

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## `About the Beer Recipe App`

I decided to go with the React problem to write a Beer Recipe  since I thought it looked the most interesting to tackle, even though I am less familiar with React than a lot of the other technologies.  In fact this is only the second React app I have written myself fully from scratch (the first being the obligatory todo list).  In the end it proved to be a challenge, but I believe I have a decent working solution.  

I focused mostly on writing legable and updatable code that I believe is pretty easy to follow.

### `What needs to be done on the server-side`

I would expect the server to have a small database for this app (or a few tables as part of a larger database).  It would have an Ingredient table that housed all the possibe ingredients for making beer with a unique `IngredientID` for each.  The Recipe table would likely have a unique `RecipeID`, and would have a row with each `IngredientID` that is in that recipe, the PK for that table would likely be the combination of those two fields.  Then either it would have both the recipe name and `UserID` of the person creating that recipe, or more likely, those two fields (recipe name and userID) would be pulled out to their own table and referenced to the previous one by the `RecipeID` (this would prevent the recipe name and user id from being duplicated in that table).  Finally there would be a user table with the unique `UserID` and any other relevent information (name, contact info, etc).

Procedures for the above database would include one to return all ingredents, another to return all ingredents for a specific recipe name, another to save a recipe up to the database using the recipe name and assigning it an unique RecipeID.

The C# server code would call the relevent procedures above and return the JSON formatted information down to the React app.  The React app would likely use something like Axios to communicate with the server.
