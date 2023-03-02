


import { ADD_EXPENSE, DELETE_EXPENSE } from "./action";


export const reducer = (state, action)=>{

    switch (action.type){

        case ADD_EXPENSE:
            const newData = {...action.data}
          
            return state;

        case DELETE_EXPENSE: 

            return state;

        default:
            return state;
    }
}