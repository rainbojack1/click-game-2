import React from 'react';

function Character(props) {
    return (
        <img className="img" src={props.image} alt={props.name} data-selected={props.selected} data-id={props.id} />
    );

}

export default Character;