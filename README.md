# Flight Finder
Built by [Claudia Poptile](https://github.com/cpoptile)

The Flight Finder Application finds the cheapest flights for user-requested destinations! This front-end app is powered by the SkyScanner API and is my first ever attempt at a Web Application. By creating this app, I have also been exposed to Visual Studio Code, JavaScript, React, and APIs for the first time as well. The final app is a product of completely self-taught knowledge of the previously mentioned topics. This application was built for the Capital One Software Engineer Summit Code Challenge and is deployed using GitHub Pages.

# Objectives
Build a web app using Skyscanner API with the following requirements

1. Let users view their flight options between two destinations for specific dates
2. Allow users to select their currency preference when searching for flights
3. Use intuitive UI principles to highlight or call out the cheapest flights for a user running a search

BONUS DELIVERABLES:
When all flight options are listed, allow the user to sort the results by cheapest to highest priced & vice versa
 

# Instructions
The Link for the application is here: https://cpoptile.github.io/SES_skyscanner_app/
1. Punch in your desired locations (note: these locations will autofill based off keystrokes)
2. Punch in your desired date of inbound and outbound departure
3. Choose your currency (Defaulted to USD for the sake of this challenge)
4. Click Search and the table displays
    - The table is sortable by clicking on the price header, allowing a user to find the cheapest flight via sorting by price.
    - There is an error pop-up that will catch common errors such as blank locations, blank dates and invalid locations (i.e. one's not selected from the drop-down)

Using the autocomplete feature consists of the user clicking once in the input box and typing. The component will suggest locations that match the user's input based on the location's PlaceName and/or CityId. A snippet of the autocomplete feature can be seen below:
![image](https://user-images.githubusercontent.com/77410366/111855529-5639ef80-88f3-11eb-8f47-d5d5bc0b9b68.png)

The results of a search inquiry are displayed in a table automatically sorted from least expensive to most expensive in order to portray the cheapest flights to the user first. The result table can be sorted by clicking on the button next to the "Min Price" header. Below is a screenshot depicting these results:
![image](https://user-images.githubusercontent.com/77410366/111855595-bb8de080-88f3-11eb-9f35-8d544d2e4b3d.png)

To change the currency of an already searched inquiry, simply change the currency using the dropdown menu and hit the "Search Flights" button again to re-render the result table.

# Built With...
- JavaScript
- CSS
- React
- [React DatePicker 3.6.0](https://www.npmjs.com/package//react-datepicker)
- Visual Studio Code


## Licenses
I do not own any of the images used in this repository, namely the SkyScanner logo. The image used in the header of this application can be found here:
https://download.logo.wine/logo/Skyscanner/Skyscanner-Logo.wine.png

# Default ReadMe Derived From Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved [here](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved [here](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved [here](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved [here](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved [here](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved [here](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
