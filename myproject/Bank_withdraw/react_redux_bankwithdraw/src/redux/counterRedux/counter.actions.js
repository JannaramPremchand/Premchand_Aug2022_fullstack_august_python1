import {DECREASE_COUNTER1, DECREASE_COUNTER2} from './counter.actionTypes'

let decreaseCounter1 = () =>{
    return{
        type: DECREASE_COUNTER1,
        payload: 'increase'
    }
}

let decreaseCounter2 = () =>{
    return{
        type: DECREASE_COUNTER2,
        payload: 'decrease'
    }
}

export {decreaseCounter1, decreaseCounter2}