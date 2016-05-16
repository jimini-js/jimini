# Jimini

#### Jimini is an aggregated wishlist sharing app. A user can create and share a wishlist of items, and share it with others. A buyer can then go visit the user’s public profile page, look at the wishlist, and fulfill the wish for the user by purchasing one or more of the items on the wishlist.

## Developer Documentation
#### Tools Used:
* [React](https://facebook.github.io/react/)
* [Babel](https://babeljs.io/)
* [Webpack](https://webpack.github.io/)
* [React Router](https://github.com/rackt/react-router)
* [Node](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [Mongoose](http://mongoosejs.com/)
* [MongoDB](https://www.mongodb.org/)
* [Sass](http://sass-lang.com/)
* [Bootstrap](http://getbootstrap.com/)
* [React Bootstrap](https://react-bootstrap.github.io/)

#### To start contributing to the Jimini codebase:
1. Fork the repo
2. Clone your fork locally
3. Ensure MongoDB is installed. If not, 'brew install mongod' > install MongoDB globally
4. 'mongod' > start a MongoDB instance
5. 'npm install' > server and client dependencies
6. 'npm run build-css' > generates stylesheet
7. 'webpack -w' > generates bundle.js file and compiles ES6 syntax using Babel
8. 'npm start' > runs the app on a local server
9. Visit http://localhost:4568/ on your browser for the login/signup page
10. Visit http://localhost:4568/search to search for a user

## Front-End
### Client Application Information
Below, you’ll find the directory structure of the front-end. All React components can be found within the components directory.

```
client
├── assets
│   └── images/gifs
├── components
│   ├── Categories.js
│   ├── Footer.js
│   ├── Home.js
│   ├── Item.js
│   ├── ItemForm.js
│   ├── Login.js
│   ├── LoginModal.js
│   ├── Main.js
│   ├── Profile.js
│   ├── PublicProfile.js
│   ├── PurchaseConfirmation.js
│   ├── Signup.js
│   └── Wishlist.js
├── styles
│   ├── css
│   │   └── main.css
│   └── scss
│       └── scss stylesheets
├── App.js
└── index.html
```

Below, you’ll find the React component structure:
```
App.js
└── Main.js
    ├── Home.js
    │   ├── Signup.js
    │   └── Login.js
    ├── Profile.js
    │   ├── LoginModal.js
    │   ├── ItemForm.js
    │   │   └── Categories.js
    │   └── Wishlist.js
    │       └── Item.js
    ├── PublicProfile.js
    │   └── Wishlist.js
    │       └── Item.js
    │           └── PurchaseConfirmation.js
    └── Footer.js
```

* The App.js component is where we render our top-level component into index.html. This is also where we utilize React Router to render our Main.js component as the index route and PublicProfile.js component as our search page.

* Within Main.js, we alternate between two component views:
  * Home.js
  * Profile.js: You will probably be most concerned with this view and its child components

* The Profile.js and PublicProfile.js components reuse the same instance of the Wishlist.js and Item.js component. Logic as to what to render is done within the Wishlist.js and Item.js component based on the view.

### General
* App.js: Top-level component with router
* Main.js: Renders Home or Profile component, deals with authentication
* Home.js: Renders home view with demo, login, signup
* Signup.js: Renders Signup form
* Login.js: Renders Login form
* Profile.js: Renders Itemform and Wishlist for logged in user
* LoginModal.js: Modal that appears when item is purchased for user
* ItemForm.js: Component for adding an item to a wishlist
* Categories.js: Icons for selecting and assigning a category of an item to be added
* Wishlist.js: Renders array of wishlist items
* Item.js: Individual item component with data passed in as props
* PublicProfile.js: Renders public profile wishlist view
* PurchaseConfirmation.js: Modal that displays upon clicking 'purchase'
* Footer.js: Footer with team information and icons

## Back-End
### Server
The Node.js/Express server handles requests to create a new user, authenticate user credentials upon login, provide a web token so user can stay signed in, creating new wishes, removing a wish from a wishlist, and marking a wish as purchased when a wish has been fulfilled.

### REST/CRUD Outline:
```
{
	"GET /": {
		"desc": "serves the index.html page",
	},

  “GET /allwishes”: {
		“desc”: “returns all wishes that belong to a user”,
		“data”: {
			“username”: “String”
		}
	},

	"POST /authenticate": {
		"desc": "decodes the token and authenticates the user",
		"data": “JWT token (string)”
	},

	"POST /signup": {
		"desc": "writes new user into the database, and returns the saved user",
		"data": {
			“username”:”String”,
			“password”:”String”
    }     
	},

	"POST /login": {
		"desc": "validates username and password, and provides a JWT if information
			matches database",
		"data": 	{
			“username”: “String”,
			“password”: “String”
    }     
	},

	"POST /wishlist" {
		"desc": "creates a new wish in the database",
		"data": {
			“username”: “String”,
			“wishname”: “String”,
			“category”: “String”,
			“link”: “String”,
			“description”: “String”
    }
	},

  “PUT /buy” {
		“desc”: “finds an item by id, and marks is as purchased”,
		“data”: {
			“id”: “String (corresponds to wish’s id in database)”,
			“message”: “String (provided by the buyer)”,
			“buyername”: “String (provided by the buyer)”,
	  }
  },

  “DELETE /wish” {
	  “desc”: “finds a wish by id, and destroys it from the database”,
	  “data”: {
	     “id”: “String (wish ID as stored in database)”
		}
	}
}
```


### Database
The MongoDB/Mongoose database stores two collections, users and wishes. The users collection consists of instances of user models which contain information about the user. All wish instances are stored in the wishes collection, and each wish has an owner (defined by the username property in the schema), so a wishlist for any user can be populated by querying the database for all wishes that have that user as their owner.

### User Schema:
* username: provided by the user upon signup
* password: hashed version of the password user entered upon signup
* loginMessage: has only two possible states, used by the front-end to determine when to show a modal to congratulate the user when one of their wish gets fulfilled. Its value is set to an empty string upon sign-up, and changes to ‘wish fulfilled’ when a buyer fulfills a wish.

### Wish Schema:
* username: this is the owner of the wish
* wishname: usually the name of the item that a user wishes for
* category: user selects from one of the options on the wish item form component by clicking on one category logo, and based on which logo was clicked, the app assigns the category name to be stored.
* link: user provided URL to an external service that sells the wish.
* description: user provided description of the item or the wish
* purchased: boolean representing whether the wish has been fulfilled or not.
* buyername: assigned when a buyer enters a name upon fulfilling the wish
* message: assigned when buyer enters a message to the user who submitted the wish.
