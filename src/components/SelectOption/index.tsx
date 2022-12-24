import * as Styles from './styles';

type Props = {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    onClick: () => void;
}

export const SelectOption = ({title, description, icon, selected, onClick}: Props) => {
    return (
        <Styles.Container onClick={onClick} selected={selected}>
            <Styles.Icon>{icon}</Styles.Icon>
            <Styles.Info>
                <Styles.Title>{title}</Styles.Title>
                <Styles.Description>{description}</Styles.Description>
            </Styles.Info>
        </Styles.Container>
    );
}