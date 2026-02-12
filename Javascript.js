function changeHeadingText () { //this is to show onclick property and variable use.
    var headingelement = document.getElementById("heading")
    
    headingelement.textContent = "I Told You!";
}

console.log("This Is a message for the console!") //this is to show Console messages


let products = ["Games", "CDS", "DVDS", "Vinyl", "Books"]; //This is a Array

for (let i = 0; i < products.length; i++) {
    console.log("Products", products[i]); 
} //This is a Loop for String Array