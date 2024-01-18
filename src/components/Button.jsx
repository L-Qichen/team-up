import '../assets/css/Button.css'

const Button = ({ text, buttonStyle }) => {

  return (
    <button
      type="submit"
      className={`btn ${buttonStyle}`}
    >
      {text ? text : 'Submit'}
    </button>
  );
}

export default Button;