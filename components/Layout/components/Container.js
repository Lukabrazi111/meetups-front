const Container = (props) => {
    return <div className={`w-full max-w-5xl m-auto ${props.className}`}>{props.children}</div>;
};

export default Container;
