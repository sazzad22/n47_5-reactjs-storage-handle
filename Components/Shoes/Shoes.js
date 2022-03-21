import React from 'react';


//todo 47_5-2 ES6 Modules, import default, relative path

//in order to use a js from another folder that js file is to be exported from that file and imported in the working js file

//two types of exporting - default(if there is only one func) & object(if there is multiple func)

const Shoes = () => {

    const firstnum = 2;
    const secondnum = 4;
    const sum = 


    return (
        <div>
            <h4>This one is Shoe comp</h4>
            <p>Sum:{sum} </p>
        </div>
    );
};

export default Shoes;