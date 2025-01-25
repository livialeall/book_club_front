import Button from "../ui/components/Button";
import Login from "../ui/components/Login";


const Home = () => {
  return (
    <div className="container">
      <div className="display-flex-center-row home">
        <div className="img">TEXTO INTERESSANTE AQUI</div>
        <div className="login display-flex-center">
          <Login></Login>
          <div>ou</div>
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
