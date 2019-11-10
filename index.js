const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");



inquirer.prompt([
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "list",
        message: "What is your favorite color?",
        choices: ["Blue", "Green", "Orange", "Purple", "Red", "White", "Yellow"],
        default: 3,
        name: "favColor"
    }
])