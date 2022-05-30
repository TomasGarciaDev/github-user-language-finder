# GitHub User Favourite Language Finder

## About the Project
This is `GitHub User Favourite Language Finder` app that allows the user to find GitHub users' most used programming language. Users have to enter an arbitrary GitHub user name; the app will return and display the best gest of their favorite programming language.
This app was created with JavaScript and React library. Using Axios to `get` request from the GitHub API and tested with @testing-library/react (render, screen, cleanup). 

## Project Overview
* The app has been built using three components: Header, Finder, and UserCard.
* Visiting users are prompted by a header "GITHUB USER FAVORITE LANGUAGE FINDER" rendered by the Header component and a form rendered by the Finder component.
* After the user fills the field with a GitHub username and submits on "Search' the 'searchRepos()' method will `get` request from to the GitHub API. Axios is used for the request, if the users exist, an array of repository objects is received. If the GitHub user does not exist or the form is submitted without filling it correctly, an `alert` will be displayed on screen.
* After the respond from the API, the UserCard component receives the array as a props. Using two methods (getFavorite() and getFavoriteLanguages()), the array is filtered to get the most used language. Then a string is displayed to let them know the GitHub user's most used language.
* UserCard component is rendered from the Finder component.

## Getting started locally

### Prerequisities
- [node](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/)

### Installation

1. Make sure preqrequisites are installed

2. Clone the repo: (if you have the file already on your machine, skip to step 2)
```
git clone https://github.com/TomasGarciaDev/github-user-language-finder.git
```

3. cd into the directory


4. Install NPM packages
```
npm install
```

5. Run client-side React with:
```
npm start
```

6. Visit: 
```
http://localhost:3000/ 
```

For running test:
```
npm run test
```

### What you should see 
![Screenshot 2022-05-30 at 15 14 10](https://user-images.githubusercontent.com/86299300/170999887-c95535f5-8b5d-4d0b-b5c1-3973004677a3.png)


## App Usage
Fill in the 'GitHub Username' field and click on the 'Search' button.
![Screenshot 2022-05-30 at 15 17 37](https://user-images.githubusercontent.com/86299300/171000415-77cc0bc7-7cd0-467a-9ae7-806508f9c7fb.png)

If you have typed an existing GitHub user, you will be prompt with his favorite language.
![Screenshot 2022-05-30 at 15 20 04](https://user-images.githubusercontent.com/86299300/171000836-58bffa7e-03b4-47cf-adf2-c8a488522d08.png)

If you have typed an unexisting GitHub user, you will be prompt with an alert message 'User not found.'
![Screenshot 2022-05-30 at 15 33 36](https://user-images.githubusercontent.com/86299300/171003214-039bcd47-9079-4e9d-94dc-641b103fdbda.png)


Thanks and hope you enjoy the app!
