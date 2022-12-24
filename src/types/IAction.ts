import { FormActions } from "../enums/FormActions"

export type IAction = {
    type: FormActions;
    payload:any
}