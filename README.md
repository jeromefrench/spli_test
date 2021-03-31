# Tech Test Fullstask Marketing Automation

## Writing back end code
### Algo  : (main.go)
See the guidelines in the code directly. This exercice can be done in another language of your choice.  

## Writing Front end code
The purpose of this exercice is to create a simple form using React.
* Create a simple app using [create-react-app](https://fr.reactjs.org/docs/create-a-new-react-app.html)
* Add a title to your page
* Create the form (section below)
* Add a submit button. Submitting the form will display the result of the form, json formatted.
##### Form content
- Favorite City : free text
- Favorite animal : dropdown with autocompletion based on this list : https://gist.github.com/borlaym/585e2e09dd6abd9b0d0a
- Favorite percentage : integer between 1 and 100
- Age : integer
- Current money on bank account : float
- Currency : dropdown with five Currency
##### expected JSON
Here is an exemple of what is expected to be displayed.
```
{
    "city" : "PARIS",
    "animal" : "dog",
    "percentage": 83,
    "age" : 18,
    "bank" : {
        "amount" : 1667399.89,
        "currency" : "USD"
    }
}
```
##### Notes :
* You can use bootstrap for simple css
* Use a package.json. Your project should be easily runnable, with only :
```
npm install
npm start
```