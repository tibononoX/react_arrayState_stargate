export const contactInfo = [
	{
		image: "./assets/images/johnSheppard.jpg",
		firstName: "John",
		lastName: "Sheppard",
		sex: "Male",
		homePlanet: "Earth",
	},
	{
		image: "./assets/images/teylaEmmagan.jpg",
		firstName: "Teyla",
		lastName: "Emmagan",
		sex: "Female",
		homePlanet: "Athos",
	},
];

export const addContact = () => {
	let firstName = prompt("Enter a first name");
	let lastName = prompt("Enter a last name");
	let sex = prompt("Male or Female?");
	let homePlanet = prompt("Enter his/her home planet");
	let image = prompt("(Optional) Enter an image link");

	if (image === "") {
		image = "./assets/images/default.jpg";
	}

	if (
		typeof firstName === "string" &&
		typeof lastName === "string" &&
		typeof homePlanet === "string" &&
		typeof image === "string"
	) {
		const newPerson = {
			image: image,
			firstName: firstName,
			lastName: lastName,
			sex: sex,
			homePlanet: homePlanet,
		};

		contactInfo.push(newPerson);
	} else {
		alert(
			"Unable to add contact, please make sure to enter correct infos (text)"
		);
	}
};

export default { contactInfo, addContact };
