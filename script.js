let ecommerce = document.getElementById("ecommerce");

// buttons
let Allbutton = document.getElementById("all-button");
let ecommercebutton = document.getElementById("ecommerce-button")
let travelbutton = document.getElementById("travel-button")
let foodbutton = document.getElementById("food-button")




travelbutton.addEventListener("click", ()=> {
    ecommerce.style.display = "none";
})

foodbutton.addEventListener("click", function() {
    ecommerce.style.display = "none";
    Allbutton.style.display = "none";
    travelbutton.style.display = "none";
    foodbutton.style.display = "none";
    ecommercebutton.style.display = "block";
})