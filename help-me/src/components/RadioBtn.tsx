import "../styles/radioBtn.css";


export default function RadioBtn(props: React.InputHTMLAttributes<HTMLInputElement>) {

    return(
        <label className="radio-button">
            <input type="radio" {...props} />
            <div className="radio-circle"></div>
        </label>
    );

}