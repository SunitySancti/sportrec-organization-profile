import './styles.scss'

interface PreloaderProps {
    kind: 'primary' | 'secondary' | 'clear',
    isLoading?: boolean,
    num?: number,
}

const Preloader = ({
    kind,
    isLoading,
    num = 4,
} : PreloaderProps
) => {
    const className = `preloader dots ${ isLoading ? 'loading ' : '' }${ kind }`;
    return (
        <div {...{ className }}>
            {[...Array(num)].map((_u, idx) => <div key={ idx }/>)}
        </div>
    );
};

export default Preloader;