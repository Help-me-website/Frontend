import "../styles/checkbox.css";



const Checkbox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <input type="checkbox" className="ui-checkbox" {...props}/>
    );
}

export default Checkbox;