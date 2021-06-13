//import { createStore } from 'redux';
const redux = require('redux');
const reduxLogger = require('redux-logger');
const createStore = redux.createStore;
const logger = reduxLogger.createLogger();
const applyMiddle = redux.applyMiddleware;
const combineReducers = redux.combineReducers;

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAM = 'BUY_ICECREAM';
;
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}
function buyIceCream() {
    return {
        type: BUY_ICECREAM
    }
}

//(previousState, action) => new State
// const initalState = {

//     numOfCakes: 10,
//     numberOfIceCream: 20
// }

const initialCakeState = {
    numOfCakes: 10,
}
const initialIceCreamState = {
    numberOfIceCream: 20,
}
// const reducer = (state = initalState, action) => {
//     switch (action.type) {
//         case BUY_CAKE: return {
//             ...state,
//             numOfCakes: state.numOfCakes - 1
//         }
//         case BUY_ICECREAM: return {
//             ...state,
//             numberOfIceCream: state.numberOfIceCream - 1
//         }
//         default: return state;
//     }
// }

const cakeReducer = (state = initialCakeState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

        default: return state;
    }
}
const iceCreamReducer = (state = initialIceCreamState, action) => {
    switch (action.type) {
        case BUY_ICECREAM: return {
            ...state,
            numberOfIceCream: state.numberOfIceCream - 1
        }

        default: return state;
    }
}
//const store = createStore(reducer);

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})
const store = createStore(rootReducer, applyMiddle(logger));
console.log('Initial state', store.getState());
//const unsubscribe = store.subscribe(() => console.log('Updated state', store.getState()))
const unsubscribe = store.subscribe(() => { })
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe()



