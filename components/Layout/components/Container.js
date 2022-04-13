const Container = (props) => {
    return <div className={`w-full m-auto ${props.className}`}>{props.children}</div>;
};

export default Container;
