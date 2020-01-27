const inquirer = require("inquirer");
const fs = require("fs");
const axios = require("axios");
const util = require("util");

const writeToFileAsync = util.promisify(fs.writeFile);
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
inquirer
    .prompt(questions)
    .then(function (response) {
        console.log(response.username)
    })
    .catch(function (err) {
        console.log(err)
    });


function writeToFile(fileName, data) {

}

function init() {

    init();
}