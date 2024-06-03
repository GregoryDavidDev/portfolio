import React from 'react';
import './TagElement.css'

function TagElement({name, inverted = false}) {
    return (
        <div className={inverted ? "tag-container inverted" : "tag-container"}><p>{name}</p></div>
    );
}

export default TagElement;