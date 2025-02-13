import { useAuth } from "../../../modules/authentication/basic";

const Home = () => {
  const { logout } = useAuth();

  return (
    <div>
      <h1>Home Page</h1>
      <div style={{
        width: "80%",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f2f2f2",
        borderRadius: "5px",
        boxShadow: "0 0 10px rgba(0,0,0,0.2)",
        color: "grey",
        marginTop: "2rem"
      }}>
        <p>Bienvenido esta es la pagina de inicio</p>
        <button type="button" onClick={logout} style={{ marginTop: '10px' }}>Cerrar sesión</button>
      </div>
    </div>
  );
};

export default Home;
