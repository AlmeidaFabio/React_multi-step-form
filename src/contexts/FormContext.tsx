import { createContext, ReactNode, useReducer } from "react";
import { FormActions } from "../enums/FormActions";
import { IAction } from "../types/IAction";
import { IState } from "../types/IState";

type ContextType = {
    state: IState;
    dispatch: (action: IAction) => void;
}

type FormProviderProps = {
    children: ReactNode;
}

const initialData: IState = {
    currentStep: 0,
    name:'',
    level:0,
    email:'',
    github:''
}

export const FormContext = createContext<ContextType | undefined>(undefined)

function FormReducer(state: IState, action: IAction) {
    switch(action.type) {
        case FormActions.setCurrentStep:
            return {...state, currentStep: action.payload}
        case FormActions.setName:
            return {...state, name: action.payload}
        case FormActions.setLevel:
            return {...state, level: action.payload}
        case FormActions.setEmail:
            return {...state, email: action.payload}
        case FormActions.setGithub:
            return {...state, github: action.payload}
        default:
            return state    
    }
}

export function FormProvider({children}: FormProviderProps) {
    const [ state, dispatch] = useReducer(FormReducer, initialData)

    return(
        <FormContext.Provider value={{
            state,
            dispatch
        }}>
            {children}
        </FormContext.Provider>
    )
}