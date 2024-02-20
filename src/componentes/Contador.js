import React, {useState} from "react";

export default function Contador(){
    const [numero, setNumero] = useState(0);
    const aumentar =() => {
        setNumero (numero + 1);
    };

    return(
        <div>
 
            <p>Numero de clicks: {numero}</p>
            <button onClick={aumentar}>Aumentar</button>
            
        </div>
    );
};
