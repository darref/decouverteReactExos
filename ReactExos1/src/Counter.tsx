import React, { useCallback, useState } from 'react';

const Counter = () => {
    const [cpt, setCpt] = useState(0); // etat

    const handleClick = useCallback( //fonction appelée par le click
        () => { 
            console.log('toto');
            setCpt(cpt + 1)
        },
        [cpt] //dependance
    )

    return (
        <div>
            <h1 onClick={handleClick}>compteur: {cpt}</h1>
        </div>
    );
};

export default Counter;
