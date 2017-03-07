alert("Welcome to the game!");

var invalid = true;

function firstCap(str) {
    var firstLetter = str.substr(0, 1);
    return firstLetter.toUpperCase() + str.substr(1);
}

while(invalid === true) {
    var animal  = prompt("Please choose your animal:\n Fox / Dog / Cat / Sloth").toLowerCase();
    switch(animal) {
        case "fox":
			alert("You've picked the wiley fox!");
			invalid = false;
			break;
		
		case "dog":
			alert("You've picked the lazy dog!");
			invalid = false;
			break;
		
		case "cat":
			alert("You've picked the cranky cat!");
			invalid = false;
			break;
		
		case "sloth":
			alert("You've picked the slinky sloth!");
			invalid = false;
			break;
		
		default:
			alert("Please choose one of the animals specified with no spaces or other symbols");
	}
}

var name = prompt("Please choose a name for your " + animal + ": ");
name = firstCap(name);

alert("It's nice to meet you " + name + "!");


while (invalid === false) {
	var action = prompt("What would you like to do today? \n1) Scratch yourself \n2) Eat some marshmallows \n3) Tell everybody what you really think of them");
    switch(action) {
		
		case "1":
			alert("That's it " + name + ", you give yourself a nice long scratch in all those places you're not allowed to in public");
			invalid = true;
		break;
		
		case "2":
			alert("Don't eat them all at once " + name + "! Oh no... too late...");
			invalid = true;
		break;

		case "3":
			alert("Whoa, you told 'em " + name + " but did you have to poke your " + animal + " claws in all of their faces like that?");
			invalid = true;
		break;

		default:
			alert("Sorry " + name + " but that sort of behaviour is off the menu!");
	}
}

console.log(invalid);