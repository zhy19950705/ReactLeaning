import {createStore} from 'redux'
let counter = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}
let asyncCounter=(state='lol',action)=>{
    return state
}

let combined=(state={},action)=>{
    return{
       counter:counter(state.counter,action),
       asyncCounter:asyncCounter(state.asyncCounter,action)
    }
}
let store=createStore(combined)
console.log(store.getState())
export default store