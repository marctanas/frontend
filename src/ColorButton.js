import React, { useState } from 'react';

const ColorButton = () => {


    const [state, setState] = useState(   //[state, setState]     - useState will return an array
        {
            label: 'red',
            className: 'btn-danger'
        }
    ) // [state, ?]     

    // can create a different state
    // const [width, setWidth] = useState(
    //     {

    //     }
    // )

    const changeColor = () => {

        if(state.label === 'red'){
            setState(
                {
                    label: "blue",
                    className: 'btn-primary'
                }
            )
        }else {
            setState(
                {
                    label: "red",
                    className: 'btn-danger'
                }
            )
        }


    }

    return (
        <button 
            onClick={changeColor}
            className={`btn ${state.className}`}>
                {state.label}
        </button>
    )
}


export default ColorButton;
