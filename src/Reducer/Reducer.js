import React, { useReducer } from 'react'

const Reducer = () => {

    const initialState = 0;
    const reducer = (state, action) => {
        switch(action) {
            case 'increment':
              return state +2
            case 'decrement':
              return state -1
            case 'rest':
                return initialState
            default: 
                return state            
        }

    }

        const [counter, dispatch] = useReducer(reducer, initialState)
    


    return (
        <div>
            <div> Count : {counter}</div>
            <button onClick={() => dispatch('increment')}>increment</button>
            <button onClick={() => dispatch('decrement')}>decrement</button>
            <button onClick={() => dispatch('rest')}>rest</button>

            <div></div>

        </div>
    )
}

export default Reducer
