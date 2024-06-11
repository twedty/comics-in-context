import React, { useContext } from "react";
import StylesContent from "./StylesContext"

export default function CollectorButton() {
    const buttonStyling = React.useContext(StylesContent)

    return (
        <div>
        <button style={buttonStyling}>
            Click Here!
        </button>
        </div>
    );
}
