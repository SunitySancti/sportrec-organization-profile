import './styles.scss'

import type { MouseEvent } from 'react'


interface TabButtonProps {
    text: string,
    isActive?: boolean,
    isDisabled?: boolean,
    onClick?: (e: MouseEvent<HTMLDivElement>) => void;
}


const TabButton = ({
    text,
    isActive,
    isDisabled,
    onClick,
} : TabButtonProps
) => {
    const className = `tab-button ${ isActive ? 'active ' : '' }${ isDisabled ? 'disabled ' : '' }`;

    return (
        <div {...{ className, onClick }}>
            { text }
        </div>
    );
};

export default TabButton
