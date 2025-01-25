import { Link } from "react-router-dom";

const Button = ({ type, text, route }) => {
  return (
    <Link to={route}>
      <button>{text}</button>
    </Link>
  );
};
export default Button;
