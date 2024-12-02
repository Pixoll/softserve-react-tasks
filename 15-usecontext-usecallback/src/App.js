import React, { useCallback, useState } from "react";
import "./App.css";
import Contacts from "./contacts";
import Logo from "./Logo";

export const ContactContext = React.createContext();

export default function App() {
    const [contacts, setContacts] = useState([{ type: "", details: "" }]);
    const [lastChannelType, setLastChannelType] = useState("");

    const addContact = useCallback(() => {
        setContacts([...contacts, { type: "", details: "" }]);
    }, [contacts]);

    const removeContact = useCallback((index) => {
        const newContacts = contacts.filter((_, i) => i !== index);
        setContacts(newContacts);
        if (newContacts.length === 0 || index === contacts.length - 1) {
            setLastChannelType("");
        }
    }, [contacts]);

    const updateContact = useCallback((index, contact) => {
        const newContacts = [...contacts];
        newContacts[index] = contact;
        setContacts(newContacts);
        setLastChannelType(contact.type);
    }, [contacts]);

    return (
        <ContactContext.Provider value={{ contacts, addContact, removeContact, updateContact, lastChannelType }}>
            <div className="grid-container">
                <div>
                    <Contacts/>
                </div>
                <div>
                    <Logo/>
                </div>
            </div>
        </ContactContext.Provider>
    );
}
