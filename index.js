const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");
const generateHTML = require("./generateHTML.js");
console.log(generateHTML.colors);
const writeToFileAsync = util.promisify(fs.writeFile);
const appendToFileAsync = util.promisify(fs.appendFile);
// I need data, github username and a color
const questions = [{
    type: "input",
    message: "What is your GITHUB username?",
    name: "username"
},
{
    type: "input",
    message: "What is your favorite color?",
    name: "color"
}];
function writeToFile(fileName, data) {

}
const gitUrl = `https://api.github.com/users/`;

function getProfile(response) {

}
inquirer
    .prompt(questions)
    .then(function (response) {

        let userName = response.username
        axios
            .get(gitUrl + userName)
            .then(function (res) {
                let profileData = res.data;
                let bioBio = profileData.bio.split(".");
                let bioEmail = profileData.bio.split("\r\n\r\n");
                let profileBio = bioBio[0];
                let profileEmail = bioEmail[1];
                const profile = {
                    picture: profileData.avatar_url,
                    blog: profileData.blog,
                    location: profileData.location,
                    github: profileData.html_url,
                    email: profileEmail,
                    bio: profileBio,
                    followers: profileData.followers,
                    following: profileData.following,
                    repos: profileData.public_repos
                }
                console.log(profile)









            });
    })
    .catch(function (err) {
        console.log(err)
    });




// async function init() {
//     console.log("hi")
// }
// init();