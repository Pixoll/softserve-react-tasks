import React, { useContext } from "react";
import { ContactContext } from "./App";

export default function ChannelStatistics() {
    const { contacts, lastChannelType } = useContext(ContactContext);

    return (
        <p data-testid="statistics">
            Count of channels: {contacts.length}<br/>
            {lastChannelType && lastChannelType !== "none" && (
                <>your last channel is: {lastChannelType.toLowerCase()}</>
            )}
        </p>
    );
}
