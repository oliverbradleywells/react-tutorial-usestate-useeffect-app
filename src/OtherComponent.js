import React from 'react';
import { useEffect } from 'react';

const OtherComponent = () => {
    useEffect(() => {
        console.log("Component did mount");

        return () => {
            console.log("Component will mount");
        }
    }, []);

    return <div>Other Component</div>

};

export default OtherComponent;