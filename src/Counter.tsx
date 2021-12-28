import s from "./Counter.module.css"
import Button from "./components/Button/Button";
import View from "./components/View/View";
import {ActionType} from "./Reducer";


type CounterType = {
    value: number
    initialValue: number
    maxValue: number
    minValue: number
    message: string
    dispatch: (action: ActionType) => void
}

const Counter = ({value, initialValue, maxValue, minValue, message, dispatch}: CounterType) => {

    if (minValue >=maxValue){
        message = 'Min value should be less than Max'
    } else if (minValue < 0 || maxValue < 0) {
        message = 'Should be > 0'
    }

    return (

        <div className={s.area}>
            <View value={value} maxValue={maxValue} message={message}/>
            <div className={s.area}>
                <Button name={"Increase"}
                        state={value === maxValue || message !== ''}
                        dispatch={dispatch} actionType='INCREASE_VALUE'/>
                <Button name={"Reset value"}
                        state={value === initialValue || message !== ''}
                        dispatch={dispatch} actionType='RESET_VALUE'/>
            </div>
        </div>
    )
}

export default Counter