import React, { useContext } from "react";
import { ContactContext } from "../App";
import ContactItem from "./ContactItem";
import styles from "./index.module.css";

export default function Contacts() {
    const { contacts, addContact } = useContext(ContactContext);

    return <>
        <div className={styles.channels}>
            {contacts.map((contact, index) => (
                <ContactItem key={index} index={index} contact={contact} />
            ))}
        </div>
        <div>
            <button className={styles.addButton} data-testid="add-button" onClick={addContact}>
                <img src="plus.svg" alt="plus logo"/>
                <span className={styles.addButtonText}>
                    Додати канал зв'язку
                </span>
            </button>
        </div>
    </>;
};
