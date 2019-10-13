# tricky-clicky
A clicking game where the player has to try

## Technologies Used

  1. React

  2. Bootstrap

  3. jQuery

## Instructions

1. Check out the [example solution](https://clicky-game.netlify.com/) and study the app's basic functionality.

2. Create a new React application using [Create React App](https://github.com/facebookincubator/create-react-app).

3. The application should render different images (of your choice) to the screen. Each image should listen for click events.

4. The application should keep track of the user's score. The user's score should be incremented when clicking an image for the first time. The user's score should be reset to 0 if they click the same image more than once.

5. Every time an image is clicked, the images rendered to the page should shuffle themselves in a random order.

6. Once the user's score is reset after an incorrect guess, the game should restart.

7. When complete, the application should be deployed to Github Pages. See the README generated with Create React App for instructions on deploying the application to Github Pages.

## Hints
* Each section should be separated into individual components.
* It's best to add functions to App.js and pass it to the child components.
* If you want to load a background image you have to do it in the public folder. 

### Helpful Links
* [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
* [React documentation](https://reactjs.org/)

### Available Scripts

* In the project directory, you can run:

 #### `npm start`

* Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

* The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

* Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

* Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

* The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

* See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.