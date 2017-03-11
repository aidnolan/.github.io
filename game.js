function Animals (animal, name, action) {
	this.animal = animal;
	this.name = name;
	this.action = action;
}

var slothID = document.getElementById("sloth");
var inputName = document.getElementById("typedInput").value;
var nameString = document.getElementById("typedBox")

var sloth = new Animals("sloth", inputName, "slinky ",);
var fox = new Animals("fox", inputName, "slinky ");
var dog = new Animals("dog", inputName, "lazy ");
var cat = new Animals("cat", inputName, "cranky ");


function alertMe (animal) {
	alert('You have chosen the ' + this.action + this.animal)
}



slothID.onclick = alertMe;


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