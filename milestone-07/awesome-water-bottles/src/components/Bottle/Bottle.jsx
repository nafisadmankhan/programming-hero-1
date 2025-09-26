import React from 'react';

const Bottle = ({bottle}) => {
    // const {}
    console.log(bottle);
    return (
        <div>
            <h3>{bottle.brand}</h3>
            <img src={bottle.image_url} alt="" />
        </div>
    );
};

export default Bottle;