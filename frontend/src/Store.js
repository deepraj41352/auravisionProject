import { createContext, useReducer } from "react"

export const Store = createContext();

const initialstate = {
    envTypes: {},
    roomType: {},
    config: {}

}

const reducer = (state, action) => {
    switch (action.type) {
        case "ENVType":
            return { ...state, envTypes: action.payload };
        case "ROOMTYPE":
            return { ...state, roomType: action.payload };
        case "FATCH_CONFIGDATA":
            return { ...state, config: action.payload };
        default:
            return state;
    }

}
export default function StoreProvider(props) {

    const [state, dispatch] = useReducer(reducer, initialstate);
    const value = { state, dispatch };

    return (
        <Store.Provider value={value}>
            {props.children}
        </Store.Provider>
    )
}
