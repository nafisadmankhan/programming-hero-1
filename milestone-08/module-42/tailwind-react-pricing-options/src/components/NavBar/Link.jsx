import React from 'react';

const Link = ({route}) => {
    return (
        <li className='px-4 hover:bg-red-950 md:mr-10 '>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;