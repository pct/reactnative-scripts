import { combineReducers } from 'redux'
import { TYPE } from './actions'

const Demo = (state = {}, action) => {
    switch (action.type) {
        case TYPE.SET_DEMO:
            return {...state, ...action.demo};
        default:
            return {...state};
    }
}

export default combineReducers({
    Demo
})