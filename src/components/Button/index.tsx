import './styles.scss'
import Icon from 'components/Icon'
import Preloader from 'components/Preloader'

import type { MouseEvent } from 'react'
import type { IconName } from 'components/Icon'


interface ButtonProps {
    kind: 'primary' | 'secondary' | 'clear',
    text?: string,
    icon?: IconName,
    isPressed?: boolean,
    isLoading?: boolean,
    isDisabled?: boolean,
    className?: string,
    onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
    [prop: string]: any,
}


const Button = ({
    kind,
    text,
    icon,
    isPressed,
    isLoading,
    isDisabled,
    className,
    onClick,
    ...props
} : ButtonProps
) => {
    className = `button ${ kind } ${ text ? 'text ' : '' }${ icon ? 'iconic ' : '' }${ isPressed ? 'pressed ' : '' }${ isLoading ? 'loading ' : '' }${ className || '' }`;

    return (
        <button {...{
            className,
            disabled: isDisabled,
            onClick,
            ...props
        }}>
            <Preloader {...{ kind, isLoading, num: text ? 4 : 3 }}/>
            { icon &&
                <Icon name={ icon }/>
            }{ !!text &&
                <span>{ text }</span>
            }
        </button>
    );
};

export default Button;
