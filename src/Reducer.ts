
export type StateType = {
    minValue: number
    maxValue: number
    currentValue: number
}

const increaseValue = 'INCREASE_VALUE'
const resetValue = 'RESET_VALUE'
const setValues = 'SET_VALUES'
const getValuesFromLS = 'GET_VALUES_FROM_LOCAL_STORAGE'
const updateMinValue = 'UPDATE_MIN_VALUE'
const updateMaxValue = 'UPDATE_MAX_VALUE'

export type ActionType = {
    type: 'INCREASE_VALUE' | 'RESET_VALUE' | 'SET_VALUES' | 'GET_VALUES_FROM_LOCAL_STORAGE'
}

export type ActionOnChangeType = {
    type: 'UPDATE_MIN_VALUE' | 'UPDATE_MAX_VALUE'
    value: string
}

export type ActionsAllTypes = ActionOnChangeType | ActionType

export const reducer = (state: StateType, action: ActionsAllTypes): StateType => {
    switch (action.type) {
        case increaseValue: {
            if (state.currentValue <= state.maxValue) {
                return {...state, currentValue: state.currentValue + 1,}
            } else return state
        }
        case resetValue:
            return {...state, currentValue: state.minValue}
        case setValues:
            let stateCopy = {...state, currentValue: state.minValue, errorMessage: '', buttonState: true}
            localStorage.setItem('minCounterValue', JSON.stringify(state.minValue))
            localStorage.setItem('maxCounterValue', JSON.stringify(state.maxValue))
            return stateCopy
        case getValuesFromLS:
            let min = localStorage.getItem('minCounterValue')
            let max = localStorage.getItem('maxCounterValue')
            if (min && max) {
                return {...state, minValue: +min, maxValue: +max, currentValue: +min}
            } else return state
        case updateMinValue:
            return {...state, minValue: +action.value}
        case updateMaxValue:
            return {...state, maxValue: +action.value}
        default:
            return state
    }
}















