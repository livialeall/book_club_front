import { useState } from "react";
import { User } from "../../interfaces/user";
import { create_user, login } from "../../routes/users";
import { checkInformations } from "../../utils/validations";

const Login = () => {
  const [user, setLoginUser] = useState<User>({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<string[]>();
  const [registerSucess, setRegisterSucess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setErrors([]);
    const email = form["email"].value;
    const password = form["password"].value;
    setLoginUser({
      email: email,
      password: password,
    });
    const response = login(user);
    if (response.status == 200) {
      setRegisterSucess(true);
    }
  }; /* Adicionar ao erros os erros do basck */

  return (
    <>
      <form action="post" onSubmit={handleSubmit} className="">
        <label htmlFor="email" key="email">
          Email
        </label>
        <input type="text" id="email" required />
        <label htmlFor="password">Senha</label>
        <input type="password" id="password" required />
        <button type="submit">Enviar</button>
      </form>
      {errors?.length > 0 && (
        <div>
          Corrija os erros:
          {errors.map((err) => (
            <div>{err}</div>
          ))}
        </div>
      )}
      {registerSucess && <div>Login realizado com sucesso!</div>}
    </>
  );
};

export default Login;
