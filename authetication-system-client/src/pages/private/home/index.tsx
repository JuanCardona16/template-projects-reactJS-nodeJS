// import { useEffect } from "react";
import { useEffect } from "react";
import { useAuth } from "../../../modules/authentication/basic";
import { useUser } from "../../../modules/user/hooks/useUser";
import { Button } from "../../../components/shared";

const Home = () => {
  const { logout } = useAuth();

  const { getProfile, isAuthenticated, isPending, isError } = useUser();

  useEffect(() => {
    if (isAuthenticated) {
      getProfile()
    }
  }, [isAuthenticated]);

  if (isPending) return <p>Cargando...</p>;
  if (isError) return <p>Error al obtener datos</p>;

  return (
    <div>
      <h1>Home Page</h1>
      <div>
        <p>Bienvenido esta es la pagina de inicio</p>
        <Button size="small" onClick={logout}>Cerrar sesión</Button>
      </div>
    </div>
  );
};

export default Home;
