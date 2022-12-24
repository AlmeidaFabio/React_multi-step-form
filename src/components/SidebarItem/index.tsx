import { Link } from 'react-router-dom';
import * as Styles from './styles';
import { ReactComponent as ProfileIcon } from '../../assets/profile.svg';
import { ReactComponent as BookIcon } from '../../assets/book.svg';
import { ReactComponent as MailIcon } from '../../assets/mail.svg';

type Props = {
    title: string;
    description: string;
    icon: string;
    path: string;
    active: boolean;
}

export const SidebarItem = ({ title, description, icon, path, active }: Props) => {
    return (
        <Styles.Container>
            <Link to={path}>
                <Styles.Info>
                    <Styles.Title>{title}</Styles.Title>
                    <Styles.Description>{description}</Styles.Description>
                </Styles.Info>
                <Styles.IconArea active={active}>
                    {icon === 'profile' &&
                        <ProfileIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'book' &&
                        <BookIcon fill="white" width={24} height={24} />
                    }
                    {icon === 'mail' &&
                        <MailIcon fill="white" width={24} height={24} />
                    }
                </Styles.IconArea>
                <Styles.Point active={active}></Styles.Point>
            </Link>
        </Styles.Container>
    );
}
