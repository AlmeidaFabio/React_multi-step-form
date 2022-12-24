import { useContext } from "react"
import { FormContext } from "../contexts/FormContext"

export function useForm() {
    const context = useContext(FormContext)
    if(context === undefined) {
        throw new Error('useForm precisa ser usado dentro do FormProvider')
    }

    return context
}
