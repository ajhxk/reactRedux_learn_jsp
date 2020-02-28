import  * as TYPES from './actionTypes';

const defaultState = {
    inputValue: 'jsp',
    list: [
        'aa',
        'bb'
    ],
}

export default (state = defaultState, action) => {

    if (action.type === TYPES.CHANGE_INPUT){
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value;
        return newState;
    }   

    if (action.type === TYPES.ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    }

    if (action.type === TYPES.DELE_ITEM) {
        let newState =JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }

    return state
}