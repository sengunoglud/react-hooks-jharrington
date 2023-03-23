import { createContext } from "react";

const initialState = {
    first : "Jack",
    last : "Herrington"
};
export type UserState = typeof initialState;

const context = createContext(initialState); 

export default context;