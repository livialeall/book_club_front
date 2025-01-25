import Button from "../ui/components/Button";
import Login from "../ui/components/Login";


const Home = () => {
  return (
    <div className="container">
      <div className="display-flex-center">
        <div className="img">TEXTO INTERESSANTE AQUI</div>
        <div className="login">
          <Login></Login>
          <span>ou</span>
          <Button
            type={null}
            text={"Faça seu cadastro"}
            route={"/register"}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
