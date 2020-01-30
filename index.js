const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");
const generateHTML = require("./generateHTML")


const writeToFileAsync = util.promisify(fs.writeFile);
const appendToFileAsync = util.promisify(fs.appendFile);


// I need data, github username and a color

// function writeToFile(fileName, data) {

// }
const gitUrl = `https://api.github.com/users/`;

// inquirer
//     .prompt(questions)
//     .then(function (data) {

//         let { userName } = data.username;
//         let colorData = data.color;

//         axios
//             .get(gitUrl + userName)
//             .then(function (res) {

//                 let profileData = res.data;



//                 console.log(colorData)
//                 console.log(profile)
//                 let newHtml = generateHTML(data)
//                 console.log(newHtml)
//                 await writeToFileAsync(`${userName}.html`, newHtml)
//             });
//     })
//     .catch(function (err) {
//         console.log(err)
//     });





async function init() {
    try {

        let { username } = await getName();
        // const { profileName } = userName;
        let { color } = await getColor();
        let githubReturn = await gitHubCall(username);
        let userStars = await getGithubStarred(username);
        let userProfile = githubReturn.data
        let bioBio = await userProfile.bio.split(".");
        let profileBio = bioBio[0];
        let profile = {
            picture: userProfile.avatar_url,
            blog: userProfile.blog,
            location: userProfile.location,
            github: userProfile.html_url,
            bio: profileBio,
            followers: userProfile.followers,
            following: userProfile.following,
            repos: userProfile.public_repos
        }
        console.log(color)
        console.log(profile)
        console.log(userStars.data.length)
    } catch (err) {
        console.log(err)
    }
}

function getName() {
    let username = inquirer
        .prompt({
            type: "input",
            message: "What is your GITHUB username?",
            name: "username"
        })
    return username
}
function getColor() {
    let color = inquirer
        .prompt({
            type: "input",
            message: "What is your favorite color?",
            name: "color",
            choices: ["green", "pink", "red", "blue"]
        })
    return color
}
function gitHubCall(username) {
    let profile = axios
        .get(`https://api.github.com/users/${username}`)
    return profile
}
function getGithubStarred(username) {
    const stars = axios
        .get(`https://api.github.com/users/${username}/starred`)
    return stars
}
init()