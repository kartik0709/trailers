import React from  'react';

export const Functions = (props) => {
    let { image, alt, top, bottom } = props.data;
    return (
        <div>
            <img src={image} alt={alt}/>
            <div>
                <h4>{top}</h4>
                <p>{bottom}</p>
            </div>
        </div>
    )
};

export const Action = (props) => {
    let { image, alt, tag, stat } = props.data;
    return (
        <div>
            <div>
                <img src={image} alt={alt}/>
            </div>
            <p>{tag}</p>
            <span>{stat}</span>
        </div>
    )
};