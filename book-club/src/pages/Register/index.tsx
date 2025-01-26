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
  const [errors,setErrors] = useState<string[]>()
  const [registerSucess,setRegisterSucess] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    setErrors([])

    const name = form["name"].value;
    const email = form["email"].value;
    const contact = form["contact"].value;
    const password = form["password"].value;
    const confirmPassword = form["confirmPassword"].value;
    const {check,errors} = checkInformations(
      name,
      email,
      contact,
      password,
      confirmPassword
    );

    if (check) {
      setErrors([])
      setNewUser({
        name: name,
        email: email,
        contact: contact,
        password: password,
      });
      const response = create_user(newUser);
      if(response.status == 200){
        setRegisterSucess(true)
      }
      /* NOTIFICAR QUE FOI CRIADO COM SUCESSO */
      /* IR PARA PAGINA DO USUARIO */
    }else{
      setErrors(errors)
    }
  };

  return (
    <div className="display-flex-center align-flex-start">
      <h2>Cadastro</h2>
      <form action="post" onSubmit={handleSubmit} className=" display-flex-justify-center">
        <label htmlFor="name" key="name">
          Nome Completo
          <input type="text" id="name" required/>
        </label>
        <label htmlFor="email">
          Email
          <input type="email" id="email" required/>
        </label>
        <label htmlFor="contact">
          Contato
          <input type="tel" id="contact" required/>
        </label>
        <label htmlFor="password" id="password">
          Senha
          <input type="password" id="password" required/>
        </label>
        <label htmlFor="confirmPassword">
          Confirmar Senha
          <input type="password" id="confirmPassword" required/>
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
          Cadastro realizado com sucesso!
        </div>
      )}
    </div>
  );
};

export default Register;
