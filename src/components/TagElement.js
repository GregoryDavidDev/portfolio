import React from 'react';
import './TagElement.css'

function TagElement({name}) {
    return (
        <div className="tag-container"><p>{name}</p></div>
    );
}

export default TagElement;