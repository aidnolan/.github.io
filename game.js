// function Animals (animal, name, action) {
// 	this.animal = animal;
// 	this.name = name;
// 	this.action = action;
// }
var slothID = document.getElementById("sloth");
var foxID = document.getElementById("fox");
var dogID = document.getElementById("dog");
var catID = document.getElementById("cat");
var inputName = document.getElementById("typedInput");
var nameString = document.getElementById("typedBox");
var submitButton = document.getElementById("submitBtn");
var resetButton = document.getElementById("resetBtn");
var previousButton = document.getElementById("previousBtn");
var enterName = document.getElementById("nameEntry");
var nameRevealer = document.getElementById("nameReveal")
var nextButton = document.getElementById("nextBtn");


slothID.addEventListener("click", picToggle);
foxID.addEventListener("click", picToggle);
dogID.addEventListener("click", picToggle);
catID.addEventListener("click", picToggle);


submitButton.addEventListener("click", function() {
	if (typedBox.innerHTML === "") {
		alert("Please enter a name!");
	} else {
	nameRevealer.style.display = "block";
	enterName.style.display = "none";
	resetButton.style.display = "inline-block";
	submitButton.style.display = "none";
	resetButton.style.display = "inline-block";
	previousButton.style.display = "inline-block";
	nextButton.style.display = "inline-block"
	}
})

resetButton.addEventListener("click", function() {
	slothID.style.display = ""; 
	foxID.style.display = "";
	dogID.style.display = "";
	catID.style.display = "";
	enterName.style.display = "none";
	nameRevealer.style.display = "none";
	submitButton.style.display = "none";
	resetButton.style.display = "none";
	previousButton.style.display = "none";
	inputName.value = "";
	typedBox.innerHTML = "";
	nextButton.style.display = "none";	
})

previousButton.addEventListener("click", function() {
	previousButton.style.display = "none";
	inputName.value = "";
	typedBox.innerHTML = "";
	nameRevealer.style.display = "";
	enterName.style.display = "block";
	submitButton.style.display = "inline-block";
})

function firstCap(str) {
    var firstLetter = str.substr(0, 1);
    return firstLetter.toUpperCase() + str.substr(1);
}

inputName.addEventListener("input", add);

function add() {
	var x = inputName.value;
	typedBox.innerHTML = firstCap(x);
}

function picToggle() {
	var picId = this;
	slothID.style.display = "none";
	foxID.style.display = "none";
	dogID.style.display = "none";
	catID.style.display = "none";
	enterName.style.display = "block";
	submitButton.style.display = "inline-block";
	resetButton.style.display = "inline-block";
	picId.style.display = ""
	picID.style.float = "left"
}







// function Animals = {
// 	this.animal = animal;


// x("Welcome to the game!");

// var invalid = true;

// function firstCap(str) {
//     var firstLetter = str.substr(0, 1);
//     return firstLetter.toUpperCase() + str.substr(1);
// }

// while(invalid === true) {
//     var animal  = prompt("Please choose your animal:\n Fox / Dog / Cat / Sloth").toLowerCase();
//     switch(animal) {
//         case "fox":
// 			x("You've picked the wiley fox!");
// 			invalid = false;
// 			break;
		
// 		case "dog":
// 			x("You've picked the lazy dog!");
// 			invalid = false;
// 			break;
		
// 		case "cat":
// 			x("You've picked the cranky cat!");
// 			invalid = false;
// 			break;
		
// 		case "sloth":
// 			x("You've picked the slinky sloth!");
// 			invalid = false;
// 			break;
		
// 		default:
// 			x("Please choose one of the animals specified with no spaces or other symbols");
// 	}
// }

// var name = prompt("Please choose a name for your " + animal + ": ");
// name = firstCap(name);

// x("It's nice to meet you " + name + "!");


// while (invalid === false) {
// 	var action = prompt("What would you like to do today? \n1) Scratch yourself \n2) Eat some marshmallows \n3) Tell everybody what you really think of them");
//     switch(action) {
		
// 		case "1":
// 			x("That's it " + name + ", you give yourself a nice long scratch in all those places you're not allowed to in public");
// 			invalid = true;
// 		break;
		
// 		case "2":
// 			x("Don't eat them all at once " + name + "! Oh no... too late...");
// 			invalid = true;
// 		break;

// 		case "3":
// 			x("Whoa, you told 'em " + name + " but did you have to poke your " + animal + " claws in all of their faces like that?");
// 			invalid = true;
// 		break;

// 		default:
// 			x("Sorry " + name + " but that sort of behaviour is off the menu!");
// 	}
// }

// console.log(invalid);