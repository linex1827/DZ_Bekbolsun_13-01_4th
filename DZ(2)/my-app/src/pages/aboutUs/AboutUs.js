import React from 'react';

const AboutUs = (props) => {
    return (
        <div>
            <p>Hello {props.text} - {props.product}</p>
        </div>
    );
};

export default AboutUs;