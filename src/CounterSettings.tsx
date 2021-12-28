import React from 'react';
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";
import {ActionsAllTypes} from "./Reducer";


type CounterSettingsType = {
    minValue: number
    maxValue: number
    dispatch: (action: ActionsAllTypes) => void
    actionType: 'UPDATE_MIN_VALUE' | 'UPDATE_MAX_VALUE'
    inputChangeChaker: () => void,
    setButtonClick?: () => void
}

const CounterSettings = ({
                             minValue,
                             maxValue,
                             dispatch,
                             inputChangeChaker,
                             setButtonClick
                         }: CounterSettingsType,) => {
    let setButtonState = false
    if (minValue >= maxValue){
        setButtonState = true
    } else if (minValue < 0 || maxValue < 0) {
        setButtonState = true
    }

    return (
        <div>
            <Input placeholder="Min value"
                   value={minValue}
                   dispatch={dispatch}
                   actionType='UPDATE_MIN_VALUE'
                   inputChangeChaker={inputChangeChaker}
            />
            <Input placeholder="Max value"
                   value={maxValue}
                   dispatch={dispatch}
                   actionType='UPDATE_MAX_VALUE'
                   inputChangeChaker={inputChangeChaker}
            />
            <Button name={"Set"} setButtonClick={setButtonClick}
                    state={setButtonState} dispatch={dispatch} actionType='SET_VALUES'/>
        </div>
    );
};

export default CounterSettings;