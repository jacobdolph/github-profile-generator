const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");

const writeToFileAsync = util.promisify(fs.writeFile);
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
}]
function getProfile(response) {
    let userName = response.username
    console.log(userName)
    axios
        .get(`https://api.github.com/users/${userName}/repos`)
        .then(function (res) {
            console.log(res.data.name);
        });
}
//use inquirer to generate CLI questions
inquirer
    .prompt(questions)
    .then(function (response) {
        console.log(response.username)
        getProfile(response)
    })
    .catch(function (err) {
        console.log(err)
    });



function writeToFile(fileName, data) {

}

function init() {

    init();
}