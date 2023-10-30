import React, { useCallback, useEffect, useState } from 'react';


const NameForm = () => {
    const [word, changeWord] = useState("")
    const [color , changeColor] = useState("black")

    const handleChange = useCallback( //fonction appelée par le changement
        (e: React.ChangeEvent<HTMLInputElement>) => { 

            if(e.target.value !== "")
            {
                changeWord(e.target.value.toUpperCase());
            }
            
        },

        [] //dependance
    );
    const handleChangeColor = useCallback( //fonction appelée par le changement
        (e: React.ChangeEvent<HTMLInputElement>) => { 
            changeColor(e.target.value)
        },
        [] //dependance
    );

    return (
        <div>
            <label>Nom:</label>
            <input type='text' onChange={handleChange}></input>
            <input type='color' onChange={handleChangeColor}></input>
            <p style={{ color: color }}>{word}</p>
        </div>
    );
};

export default NameForm;