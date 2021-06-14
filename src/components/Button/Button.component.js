import "./Button.css";

const Button = (props) => {
    const {children} = props;
    return(<button
        {...props}
            className="view-detail-button"
            type="button">{children}</button>
    );
}

export default Button;
