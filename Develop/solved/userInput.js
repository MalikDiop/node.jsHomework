const inquirer = require("inquirer");
var fs = require("fs");

var greetings = require('./greetings.js');
console.log(greetings.greetings);

function userQuestions(){ 
  inquirer
    .prompt([
        {
          type: "input",
          message: "What is your user name?",
          name: "username"
        },
        {
          type: "password",
          message: "What is your password?",
          name: "password"
        },
        {
          type: "password",
          message: "Re-enter password to confirm:",
          name: "confirm"
        }
      ]).then(function(response) {
            if (response.confirm === response.password) {
              fs.writeFile("userPassword.txt", response.password, function(){
              console.log("Success!");
            })
          }
            else {
              console.log("You forgot your password already?!");
            }
            
          });
          }
        
    userQuestions()

