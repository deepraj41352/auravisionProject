import { createContext, useReducer } from 'react';

export const Store = createContext();

const initialstate = {
  fullBox: false,
  imageShow: false,
  envTypes: {},
  roomType: {},
  imgUpload: {},
  countColumns: 2,
  countRows: 2,
  config: {},
  roomThem: {},
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_FULLBOX_ON':
      return { ...state, fullBox: true };
    case 'SET_ADDIMAGE':
      return { ...state, imageShow: true };
    case 'SET_REMOVEIMAGE':
      return { ...state, imageShow: false };
    case 'ENVType':
      return { ...state, envTypes: action.payload };
    case 'ROOMTYPE':
      return { ...state, roomType: action.payload };
    case 'IMGUPLOAD':
      return { ...state, imgUpload: action.payload };
    case 'ROOMTHEM':
      return { ...state, roomThem: action.payload };
    case 'COUNTCOLUMN':
      return { ...state, countColumns: action.payload };
    case 'COUNTROW':
      return { ...state, countRows: action.payload };
    case 'FATCH_CONFIGDATA':
      return { ...state, config: action.payload };
    default:
      return state;
  }
};

export default function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialstate);
  const value = { state, dispatch };

  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
