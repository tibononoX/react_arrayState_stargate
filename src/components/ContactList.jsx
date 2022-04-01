import ContactCard from "./ContactCard";
import "../styles/ContactList.css";
import { useState } from "react";
import { contactInfo, addContact } from "../data/data";

export const ContactList = () => {
	const [count, updateCount] = useState(0);
	const refreshCount = () => updateCount(count + 1);

	return (
		<>
			<ul className="contactList">
				{contactInfo.map((person, index) => (
					<ContactCard {...person} key={index} />
				))}
			</ul>
			<button
				className="addButton"
				onClick={(e) => {
					addContact();
					refreshCount();
				}}
			>
				Add Contact
			</button>
		</>
	);
};

export default ContactList;
