import {DECREASE_COUNTER1, DECREASE_COUNTER2} from './counter.actionTypes'


export const COUNTER_KEY   = 'counterStore'

let initialState = {
    count: 2500701
}

let counterReducer = (state = initialState, action) =>{
    let {type} = action

    switch(type){
        case DECREASE_COUNTER1:
            return{
                count: state.count - 10000
            }

            case DECREASE_COUNTER2:
                return{
                    count: (state.count - 5000 > 0)? state.count - 5000 : 1
                }
                default: return state
    }

}

export {counterReducer}