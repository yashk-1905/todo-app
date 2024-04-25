import { useReducer } from "react";
import { createContext } from "react";

export const FinalArrayContext = createContext(
    {
        finalArr: [],
        addItem: () => { },
        deleteItem: () => { },
    }
);
const reducerFunction = (state, action) => {
    if(action.type === 'ADD_ITEM'){
        let newArr = [...state, {tname: action.payload.todoName, tdate: action.payload.todoDate}];
        return state = newArr;
    }else if(action.type === 'DELETE_ITEM'){
        return state.filter((x)=> x.tname !== action.payload.y);
    }
    return [];
}
const FinalArrayContextProvider = ({ children }) => { 
    let initialArr = []; 
    let [finalArr, dispatchArr] = useReducer(reducerFunction, initialArr);
    
    let addItem = (todoName, todoDate) => {
        let actionObj = {
            type: 'ADD_ITEM',
            payload: {
                todoName,
                todoDate,
            }
        }
        dispatchArr(actionObj);
    }

    let deleteItem = (y) => {
        let actionObj = { 
            type: "DELETE_ITEM", 
            payload: { 
                y, 
            }, 
        }

        dispatchArr(actionObj);
    }
    return <FinalArrayContext.Provider
        value = {
            {
                finalArr,
                addItem,
                deleteItem
            }
        }
    >
        {children}
    </FinalArrayContext.Provider>
}

export default FinalArrayContextProvider;