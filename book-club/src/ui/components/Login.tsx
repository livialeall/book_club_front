import { useState } from "react";
import { User } from "../../interfaces/user";
import { create_user, login } from "../../routes/users";
import { checkInformations } from "../../utils/validations";

const Login = () => {
  const [user, setLoginUser] = useState<User>({
    email: "",
    password: "",
  });
  const [errors,setErrors] = useState<string[]>()
  const [registerSucess,setRegisterSucess] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setErrors([])
    const email = form["email"].value;
    const password = form["password"].value;
    setLoginUser({
        email: email,
        password: password,
      });
    const response = login(user);
    setRegisterSucess(true)
    }    /* Adicionar ao erros os erros do basck */


  return (
    <div>
      <h2>Bem Vindo de volta!</h2>
      <form action="post" onSubmit={handleSubmit}>
        <label htmlFor="name" key="name">
          Nome Completo
          <input type="text" id="name" required/>
        </label>
        <label htmlFor="email">
          Email
          <input type="email" id="email" required/>
        </label>
        <button type="submit">Enviar</button>
      </form>
      {errors?.length > 0 && (
        <div>
          Corrija os erros:
          {errors.map(
            (err) => <div>
              {err}
            </div>
          )}
        </div>
      )}
      {registerSucess && (
        <div>
          Login realizado com sucesso!
        </div>
      )}
    </div>
  );
};

export default Login;
