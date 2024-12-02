import { IconButton } from "@mui/material";
import { memo, useCallback, useContext } from "react";
import { ContactContext } from "../App";
import styles from "./ContactItem.module.css";

const options = [
    { value: "none", label: "" },
    { value: "viber", label: "Viber" },
    { value: "telegram", label: "Telegram" },
    { value: "messenger", label: "Messenger" },
    { value: "sms", label: "SMS" },
];

const ContactItem = memo(({ index, contact }) => {
    const { removeContact, updateContact } = useContext(ContactContext);

    const handleTypeChange = useCallback((e) => {
        updateContact(index, { ...contact, type: e.target.value });
    }, [index, contact, updateContact]);

    const handleDetailsChange = useCallback((e) => {
        updateContact(index, { ...contact, details: e.target.value });
    }, [index, contact, updateContact]);

    console.log("child render", index);

    return (
        <div className={styles.fullChannelControll}>
            <div className={styles.channelAndChannel}>
                <p className={styles.channelOfConntection}>
                    Канал зв'язку
                </p>
                <select
                    className={styles.selecterOptions}
                    name="optionSelected"
                    value={contact.type}
                    onChange={handleTypeChange}
                >
                    {options.map((el) => (
                        <option key={el.value} value={el.value}>
                            {el.label}
                        </option>
                    ))}
                </select>
            </div>
            <div className={styles.detailsAndInputAndDelete}>
                <p className={styles.channelOfConntection}>
                    Деталі
                </p>
                <textarea
                    data-testid="details"
                    maxLength="100"
                    rows="2"
                    className={styles.detailsChannelInput}
                    placeholder="введіть телефон або @username"
                    value={contact.details}
                    onChange={handleDetailsChange}
                />
                <div className={styles.removeButtons}>
                    {index !== 0 && (
                        <span>
                            <IconButton onClick={() => removeContact(index)}>
                                <img src="bin.svg" alt="bin logo"/>
                                <span className={styles.removeButtonText}>
                                    Видалити канал
                                </span>
                            </IconButton>
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
}, (prevProps, nextProps) => {
    return prevProps.contact.type === nextProps.contact.type
        && prevProps.contact.details === nextProps.contact.details;
});

export default ContactItem;
