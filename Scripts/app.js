/**
 * FileName: app.js * 
 * @author Hassan Kobeissi
 * @date July 7th, 2016
 * 
 * StudentID: 300847239
 * website:
 * @description This file is the main javascript file for the web site
 */

// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";
    //name and age variables
var name = "Kobe";
var age = 21;
    //The User object and properties
    var user = {
        Username: "1",
        Name: "guest",
        Email: "TomT123@hotmail.com",
        Password: "Abc123"
    };

    function init() {

        console.log(user);
        
    }
    
    window.addEventListener("load", init);
    
})();