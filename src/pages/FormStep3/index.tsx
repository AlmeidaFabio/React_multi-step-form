import { ChangeEvent, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom'
import { Theme } from '../../components/Theme'
import { FormActions } from '../../enums/FormActions';
import { useForm } from '../../hooks/useForm';
import * as Styles from './styles'

export default function FormStep3(){
    const navigate = useNavigate();
    const { state, dispatch } = useForm()

    useEffect(() => {
        if(state.name === '') {
            navigate('/');
        } else {
            dispatch({
                type: FormActions.setCurrentStep,
                payload: 3
            });
        }
    }, []);

    function handleNextStep() {
        if(state.email !== '' && state.github !== '') {
            alert(`Obrigado ${state.name}, Boa Sorte!!!`)
            navigate('/')
        } else {
            alert('Preencha os campos!!!')
        }

    }

    function handleEmailChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    }
    
    function handleGithubChange(e: ChangeEvent<HTMLInputElement>) {
        dispatch({
            type: FormActions.setGithub,
            payload: e.target.value
        });
    }

    return(
        <Theme>
            <Styles.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha com seus contatos para conseguirmos entrar em contato.</p>

                <hr />

                <label>
                    Qual seu e-mail?
                    <input
                        type="email"
                        value={state.email}
                        onChange={handleEmailChange}
                    />
                </label>

                <label>
                    Qual seu GitHub?
                    <input
                        type="url"
                        value={state.github}
                        onChange={handleGithubChange}
                    />
                </label>

                <Link to="/step2" className="backButton">Voltar</Link>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </Styles.Container>
        </Theme>
    )
}