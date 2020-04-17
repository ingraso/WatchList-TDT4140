# 31

## Motivation
WatchList AS is a platform to review movies and series. The application was developed in cooperation with a product owner, in the TDT4140 course at NTNU during the spring semester in 2020.

## Technology
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and is written in React frontend and JavaScript backend.

## Running Application

1. To run WatchList on your own computer you need to have a package manager installed. We recommend [Node Package Manager](https://www.npmjs.com/get-npm).
2. After installing a package manager you need to download the project and open up the command line.
3. From the command line go into the folder titled "watch-list-as-movies".
4. If it is the first time you're installing WatchList locally run "npm install".
5. Otherwise you can start WatchList with npm start and the application will be hosted [Locally](http://localhost:3000).
6. You can create a normal user through the application. However if you want admin privileges you can use the user:
### `Username: a`
### `Password: a` 

If you want further guidance on using the application, you can read [this](https://gitlab.stud.idi.ntnu.no/tdt4140-2020/31/-/wikis/Wiki-1:-Brukermanual) user manual.

## Available Scripts

In the project directory, you can run:

### `npm install`

Necessary for installing all required modules before the application can be started using 'npm start'. This script only needs to be run once for first time setup of the application.

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

## API

The project uses [Firebase](https://firebase.google.com/docs/web/setup) for API and hosting. The web hosted page can be found [Here](https://watchlistas.firebaseapp.com/). There is no need to sign in or add any tokens for API functions to work correctly as security tokens are added to all API requests needed.
