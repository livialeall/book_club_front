import Button from "../ui/components/Button";
import Login from "../ui/components/Login";


const Home = () => {
  return (
    <div className="display-flex-center">
      <div>TEXTO INTERESSANTE AQUI</div>
      <div>
        <span>Bem vindo(a)!</span>
        <Login></Login>
        <span>ou</span>
        <Button
          type={null}
          text={"Faça seu cadastro"}
          route={"/register"}
        ></Button>
      </div>
    </div>
  );
};

export default Home;
