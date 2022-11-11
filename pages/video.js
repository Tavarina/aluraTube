import React from "react";
import { ColorModeContext } from "../src/components/Menu/components/ColorMode";
import DarkModeSwitch from "../src/components/Menu/components/DarkModeSwitch";


export default function Video() {
    const contexto = React.useContext(ColorModeContext);

    return (
        <div>
            Videos Aluratube
            {contexto.mode}
            <button onClick={() => contexto.toggleMode()}>
                Trocar modo
            </button>
            <DarkModeSwitch />
        </div>
    )
}