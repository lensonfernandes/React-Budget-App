 import {createStore} from 'redux';
 import {composeWithDevTools} from "redux-devtools-extension"

 import {reducer} from '../reducer'




export const INITIAL_STORE = [{
    id:"QWERTY1",
    title: "Buy phone1",
    description:"Phone upgrade",
    amount: 500,
    type:"EXPENSE",
   date:"2023-01-10"
},
{
    id:"QWERTY2",
    title: "Buy phone2",
    description:"Phone upgrade2",
    type:"EXPENSE",
    amount: 1500,
    date:"2023-01-10"
}
,
{
    id:"QWERTY3",
    title: "Buy phone3",
    description:"Phone upgrade3",
    type:"EXPENSE",
    amount: 5000,
    date:"2023-01-10"
}
,
{
    id:"QWERTY4",
    title: "Buy phone4",
    description:"Phone upgrade4",
    type:"EXPENSE",
    amount:4500,
    date:"2023-01-10"
}



]


export const store = createStore(reducer, INITIAL_STORE, composeWithDevTools())