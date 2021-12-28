import React, {useEffect, useReducer, useState} from 'react';
import './App.css';
import Counter from "./Counter";
import CounterSettings from "./CounterSettings";
import {reducer, StateType} from "./Reducer";


function App() {

    const initialState: StateType = {
        minValue: 0,
        maxValue: 5,
        currentValue: 0,
    }

    let [state, dispatch] = useReducer(reducer, initialState)
    console.log('APP')
    console.log(state.minValue)
    console.log(state.maxValue)
    let [validationMessage, setValidationMessage] = useState<string>('')


    const getLocalValues = () => {
        dispatch({type: 'GET_VALUES_FROM_LOCAL_STORAGE'})
    }
    useEffect(getLocalValues, [])

    const inputChangeCheck = () => {
        setValidationMessage('Set value')
    }
    const setButtonClick = () => {
        setValidationMessage('')
    }

    return (
        <div className="App">
            <CounterSettings
                minValue={state.minValue}
                maxValue={state.maxValue} dispatch={dispatch}
                actionType='UPDATE_MIN_VALUE'
                inputChangeChaker={inputChangeCheck}
                setButtonClick = {setButtonClick}
            />
            <Counter value={state.currentValue}
                     initialValue={state.minValue}
                     maxValue={state.maxValue}
                     dispatch={dispatch}
                     message={validationMessage}
                     minValue = {state.minValue}
            />
        </div>
    );
}

export default App;
