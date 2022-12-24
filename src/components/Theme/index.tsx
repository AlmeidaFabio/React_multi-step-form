import { ReactNode } from 'react'
import { useForm } from '../../hooks/useForm';
import { Header } from '../Header'
import { SidebarItem } from '../SidebarItem';
import * as Styles from './styles'

type Props = {
    children: ReactNode;
}

export function Theme({children}: Props) {
    const { state } = useForm();
    
    return(
        <Styles.Container>
            <Styles.Area>
                <Header />
                <Styles.Steps>
                    <Styles.Sidebar>

                        <SidebarItem
                            title="Pessoal"
                            description="Se identifique"
                            icon="profile"
                            path="/"
                            active={state.currentStep === 1}
                        />

                        <SidebarItem
                            title="Profissional"
                            description="Seu nível"
                            icon="book"
                            path="/step2"
                            active={state.currentStep === 2}
                        />

                        <SidebarItem
                            title="Contatos"
                            description="Como te achar"
                            icon="mail"
                            path="/step3"
                            active={state.currentStep === 3}
                        />

                    </Styles.Sidebar>
                    <Styles.Page>
                        {children}
                    </Styles.Page>
                </Styles.Steps>
            </Styles.Area>
        </Styles.Container>
    )
}