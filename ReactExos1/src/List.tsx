import React, { useState } from 'react';

const tabNamesProfs = ["Thomas" , "Yoann" , "Aly" , "Jeremy"];

const List = () => {
    return (
        <ul>
            {
            tabNamesProfs.map((name , i) => {
                return <li style={{color: i % 2 ? 'black' : 'blue'}}>{name}</li>
            })
            }
        </ul>
    )
}

export default List