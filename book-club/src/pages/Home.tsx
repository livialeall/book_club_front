import Button from "../ui/components/Button";

const Home = () => {
  return (
    <div>
      <span>Já é cadastrado(a)?</span>
      <Button type={null} text={"Entre na sua conta"} route={"/login"}></Button>
      <span>ou</span>
      <Button type={null} text={"Faça seu cadastro"} route={"/register"}></Button>
    </div>
  );
};

export default Home;
