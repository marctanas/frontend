import React, { useState } from 'react';

const CounterButton = () => {

    const [state, setState] = useState( 
        {
            label: 0,
        }
    )     
    
    const countUp = () => {

        // create a new variable for the new state
        let newLabel = state.label + 1;

        // update the state using setState
        setState(
            {
                ...state,        //spread operator. this will copy all the keys in the useState so that we do not type it again
                label: newLabel,
            }
        )

    }

    return (
        <button 
            onClick={countUp}
            className={`btn btn-primary`}>
                {state.label}
        </button>
    )
}


export default CounterButton;
