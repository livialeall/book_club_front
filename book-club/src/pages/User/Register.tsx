import { useState } from "react";
import { NewUser } from "../../interfaces/user";
import { create_user } from "../../routes/users";
import { checkInformations } from "../../utils/validations";

const Register = () => {
  const [newUser, setNewUser] = useState<NewUser>({
    name: "",
    email: "",
    contact: "",
    password: "",
  });
  const [errors, setErrors] = useState<string[]>();
  const [registerSucess, setRegisterSucess] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setErrors([]);

    const name = form["name"].value;
    const email = form["email"].value;
    const contact = form["contact"].value;
    const password = form["password"].value;
    const confirmPassword = form["confirmPassword"].value;
    const { check, errors } = checkInformations(
      name,
      email,
      contact,
      password,
      confirmPassword
    );

    if (check) {
      setErrors([]);
      setNewUser({
        name: name,
        email: email,
        contact: contact,
        password: password,
      });
      const response = create_user(newUser);
      if (response.status == 200) {
        setRegisterSucess(true);
      }
      /* NOTIFICAR QUE FOI CRIADO COM SUCESSO */
      /* IR PARA PAGINA DO USUARIO */
    } else {
      setErrors(errors);
    }
  };

  return (
    <>
      <form action="post" onSubmit={handleSubmit} className="">
        <label htmlFor="name" key="name">
          Nome Completo
        </label>
        <input type="text" id="name" required />
        <label htmlFor="email">Email</label>
        <input type="email" id="email" required />
        <label htmlFor="contact">Contato</label>
        <input type="tel" id="contact" required />

        <label htmlFor="password" id="password">
          Senha
        </label>
        <input type="password" id="password" required />

        <label htmlFor="confirmPassword">Confirmar Senha</label>
        <input type="password" id="confirmPassword" required />

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
      {registerSucess && <div>Cadastro realizado com sucesso!</div>}
    </>
  );
};

export default Register;
