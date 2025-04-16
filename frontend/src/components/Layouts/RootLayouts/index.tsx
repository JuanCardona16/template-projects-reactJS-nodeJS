import { Outlet } from "react-router-dom";
import { useAuth } from "../../../modules/authentication/basic";
import { Button } from "../../shared";
import { useRootLayoutData } from "../../../hooks";

export const RootLayout = () => {
  const { logout } = useAuth();
  const { user, isError, isPending } = useRootLayoutData();

  if (isPending) return <p>Cargando...</p>;
  if (isError) return <p>Error al obtener datos</p>;

  return (
    <>
      <main className="flex">
        <section className="bg-background-secondary h-screen w-2xs p-3 flex justify-between flex-col">
          <div>
            <h2 className="text-center">PLANTILLA BASICA</h2>
          </div>
          <Button
            variant="secondary"
            width="full"
            size="small"
            onClick={logout}
          >
            Cerrar sesión
          </Button>
        </section>
        <section className="p-3 w-full">
          <div className="flex justify-between items-center mb-3 bg-accent p-2 rounded">
            {user && (
              <h2 className=" text-xl text-center">
                Bienvenido, {user?.username}
              </h2>
            )}
            <div>
              {user && (
                <Button variant="primary" width="full" size="small">
                  Mi Perfil
                </Button>
              )}
            </div>
          </div>
          <div>
            <Outlet />
          </div>
        </section>
      </main>
    </>
  );
};
