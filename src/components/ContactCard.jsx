import "../styles/ContactList.css";

export const ContactCard = ({
	image = "./assets/images/default.jpg",
	firstName = "Name",
	lastName = "Last Name",
	sex = "",
	homePlanet = "",
}) => {
	return (
		<li className="contactCard">
			<img src={image} alt={`${firstName} ${lastName.toUpperCase()}`} />
			<h1>
				{firstName} {lastName.toUpperCase()}
			</h1>
			<h3>Sex: {sex}</h3>
			<h3>Planet of origin: {homePlanet}</h3>
		</li>
	);
};

export default ContactCard;
