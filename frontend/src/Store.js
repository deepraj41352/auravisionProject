import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialstate = {
  envTypes: {},
  roomType: {},
  imgUpload: {},
  data: [],
  countColumn: 2,
  countRow: 2,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'ENVType':
      return { ...state, envTypes: action.payload };
    case 'ROOMTYPE':
      return { ...state, roomType: action.payload };
    case 'IMGUPLOAD':
      return { ...state, imgUpload: action.payload };
    case 'COUNTCOLUMN':
      return { ...state, countColumn: action.payload };
    case 'COUNTROW':
      return { ...state, countRow: action.payload };
    default:
      return state;
  }
};
export default function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
