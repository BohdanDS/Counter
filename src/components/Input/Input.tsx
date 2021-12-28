import React, {ChangeEvent} from 'react';
import {ActionOnChangeType} from "../../Reducer";
import s from './Input.module.css'

type InputType = {
    placeholder: string
    value:number
    dispatch: (action: ActionOnChangeType) => void
    inputChangeChaker: ()=>void
    actionType: 'UPDATE_MIN_VALUE' |'UPDATE_MAX_VALUE'
}

const Input = (props: InputType) => {

    let inputValue = React.createRef<HTMLInputElement>()

    const onChangeHandler = (event:ChangeEvent<HTMLInputElement>) => {
        props.dispatch({type: props.actionType, value: event.currentTarget.value})
        props.inputChangeChaker()
    }

    return (
         <div>
             {props.placeholder}<input className={props.value >= 0 ? s.input: s.inputRed} type='number' ref={inputValue} value={props.value} onChange={onChangeHandler}/>
         </div>
    );
};

export default Input;