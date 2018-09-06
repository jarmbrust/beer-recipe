# `HELLO SOVOS!!!`

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## `About the Beer Recipe App`

I decided to go with the problem to write a Beer Recipe since I thought it looked the most interesting to tackle.  Generally I am less familiar with React than a lot of the other technologies so in the end this proved to be a bit of a challenge.  The end result is good but I do outline below a bug that needs to be fixed and a few improvments I would do.

The ingredient search assumes a list of ingredients that is longer and less managable than the 13 I have listed, so it would help the user to find a value on the list.

### `Known Bugs`
There is a known bug where the checkbox does not show as checked when you do an ingredient search.  I was working on a solution but ran out of time.  Definitely would fix this.  

### `Needed Improvments`
The UI could also use some touch-ups, and while I added some accessibility, I didn't fully make it accessible and would do so with a little more time.

Also, the program could really use a "clear" button to clear all the checkboxes and the entry fields.  And an ability to over-write and/or delete saved recipes would be very useful too.

Lastly while I believe it is best to have self-documentating code, this does need a little more explicit documentation.

### `What needs to be done on the server-side`

I would expect the server to have a small database for this app (or a few tables as part of a larger database).  It would have an Ingredients table that housed all the possibe ingredients for making beer with a unique `IngredientID` for each.  The Recipe table would likely have a unique `RecipeID`, and would have a row with each `IngredientID` that is in that recipe, the PK for that table would be the combination of those two fields.  Then either it would have both the recipe name and `UserID` of the person creating that recipe, or more likely, those two fields (recipe name and userID) would be pulled out to their own table and referenced to the previous one by the `RecipeID` (this would prevent the recipe name and user id from being duplicated in that table).  Finally there would be a user table with the unique `UserID` and any other relevent information (name, contact info, etc).

Procedures for the above database would include one to return all ingredents, another to return all ingredents for a specific recipe name, another to save a recipe up to the database using the recipe name and assigning it an unique RecipeID.

The C# server code would call the relevent procedures above and return the JSON formatted information down to the React app.  The React app would likely use something like Axios to communicate with the server.

## `Thanks!`
