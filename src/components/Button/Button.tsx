import React from "react";
import s from "./Button.module.css"
import {ActionType} from "../../Reducer";


type ButtonAddType = {
    name: string
    state: boolean
    dispatch: (action: ActionType) => void
    actionType: 'INCREASE_VALUE' | 'RESET_VALUE' | 'SET_VALUES' | 'GET_VALUES_FROM_LOCAL_STORAGE'
    setButtonClick?: () => void
}

const Button = ({name, state, dispatch, actionType, setButtonClick}: ButtonAddType) => {

    const onClickHandler = () => {
        dispatch({type: actionType})
        if (setButtonClick){
            setButtonClick()
        };
    }

    return (
        <button onClick={onClickHandler} disabled={state} className={s.button}>{name}</button>
    )
}

export default Button