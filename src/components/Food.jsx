import React from 'react';

export default function Food({name, picture}) {
    return(
        <div>
            <h2>I love : {name}!</h2>
            <img src={picture} alt={name}/>

        </div>
    )
};
