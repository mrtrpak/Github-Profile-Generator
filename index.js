// variables for npms
const axios = require("axios");
const inquirer = require("inquirer");
const fs = require("fs");

// question prompts for user
inquirer.prompt([
    {
        type: "input",
        message: "What is your Github username?",
        name: "username"
    },
    {
        type: "list",
        message: "What is your favorite color?",
        choices: ["blue", "green", "orange", "purple", "red", "white", "yellow"],
        default: 3,
        name: "favColor"
    }
    // getting info from github
]).then(response => {
    const username = response.username;
    const favColor = response.favColor;
    const queryUrl = 'https://api.github.com/users/' + username;
    axios.get(queryUrl).then(gitInfo => {
        fs.writeFile(username + ".md",
        "<h1 style='color:" + favColor + "'>" + gitInfo.data.name + "</h1>"
        + "<img src=" + gitInfo.data.avatar_url + " style='width: 50px; height: 50px;'>"
        + "<div>Bio: " + gitInfo.data.bio + "</div>"
        + "<div>Company: " + gitInfo.data.company + "</div>"
        + "<a href='" + gitInfo.data.html_url + "'>" + gitInfo.data.name + "'s Github Homepage</a>"
        + "<div>Public Repos: " + gitInfo.data.public_repos + "</div>"
        + "<div>Followers: " + gitInfo.data.followers + "</div>"
        + "<div>Following: " + gitInfo.data.following + "</div>"
        + "<div>Location: " + gitInfo.data.location + "</div>",
        function(error) {
            if (error) {
                return error;
            } else {
                console.log("successful!");
            }
        }
        );
    });
})