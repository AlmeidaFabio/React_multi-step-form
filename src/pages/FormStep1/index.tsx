import { ChangeEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import { Theme } from '../../components/Theme'
import { FormActions } from '../../enums/FormActions';
import { useForm } from '../../hooks/useForm';
import * as Styles from './styles'

export default function FormStep1(){
    const navigate = useNavigate();
    const { state, dispatch } = useForm()

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload:1
        })
    },[])

    function handleNextStep() {
        if(state.name !== '') {
            navigate('/step2')
        } else {
            alert('Preencha os campos!!!')
        }

    }

    function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        })
    }

    return(
        <Theme>
            <Styles.Container>
                <p>Passo 1/3</p>
                <h1>Vamos começar com o seu nome</h1>
                <p>Preencha o campo abaixo com seu nome completo</p>

                <hr />

                <label htmlFor="">
                    Nome:
                    <input
                        type="text" 
                        autoFocus
                        value={state.name}
                        onChange={handleNameChange}
                    />
                </label>

                <button onClick={handleNextStep}>Próximo</button>
            </Styles.Container>
        </Theme>
    )
}