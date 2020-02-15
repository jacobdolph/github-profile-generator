# Github Profile Generator

This command line application will help by looking for up to date information on github users, and generating their public information to a pdf with links to their github profile, portfolio, and location.

## Getting Started

Things you will need to help you access this command line application
- a command line terminal
- a node environment
### Prerequisites

What you will need to install to use the application

```
npm install
- inquirer
- fs
-axios
-util
-pdf
```
run these installs in you command line terminal to install the required modules

## Using the App

Once the dependancies are installed, just run node index.js

### Input data
The app will ask you for your first name, last name, your github username, and ask for your favorite color from a list of colors.
### Open your newly built profile pdf
after you input your data, the app will build an html and pdf version of your github public profile displaying the numbers of public repos you have, how many starred repos you have, how many people you are following and how many followers you have. At the top of your profile, you will have your profile picture displayed, your name, current city, a link to your github, and a link to your portfolio if it is linked on your github profile!
## Technical Components
1. The app starts with assigning the modules that will be required for the app to work properly: inquirer - to prompt the quiestions for the user, axios - the call to github api to gather the information on the developers github page, fs and util - to create the async read and write functions.
2. The inquirer functions are listed underneath the initialization of the async function. The functions gather the full name of the developer, the github name, and the color choice from the user.
3. after the inquirer functions, the functions that will make the request to github using an axios calls are listed. githubCall gathers the basic user information, and githubStarred grabs the information on the starred repos.
4. The application will start with an async function initialization and start calling the functions with awaits to get the promises.
5. after the the application has gathered the information, it takes the generateHTML.js file and intripolates the data where necessary in the html template, saves it, reads it back, and converts it to a pdf file using the html to pdf module.
## Built With
Node
JavaScript
Html
Css
Bootstrap
### with dependencies
```
Inquirer npm
Axios Npm
Util Npm
Html - pdf npm
```

## Pictures

###### gif of the application in use
![Apllication Use](./assets/images/github-profile-generator.gif "Application Use")
###### Generated Profile Page
![Profile PDF](./assets/images/github-profile-pdf.png "Profile Pdf")


