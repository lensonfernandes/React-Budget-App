


import { ADD_EXPENSE, DELETE_EXPENSE, UPDATE_EXPENSE } from "./action";


export const reducer = (state, action)=>{

    switch (action.type){

        case ADD_EXPENSE:
            const newData = {...action.data}
            newData.id= state.length+1
            return [...state, newData];

        case DELETE_EXPENSE: 
            const newStore = state.filter((ele)=>{
                if(ele.id != action.id)
                    return ele
            })
            return newStore;

        case UPDATE_EXPENSE: 
           
            return state;

        default:
            return state;
    }
}