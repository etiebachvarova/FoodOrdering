// scripts.js
$(document).ready(function() {
    // Load the registration form
    $("#register").click(function() {
        $("#content").load("register.html");
    });

    // Load the login form
    $("#login").click(function() {
        $("#content").load("login.html");
    });

    // Load the categories
    $("#categories").click(function() {
        $("#content").load("categories.html");
    });

    // Load the cart
    $("#cart").click(function() {
        $("#content").load("cart.html");
    });
});
