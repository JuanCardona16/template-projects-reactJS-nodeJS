import { Outlet, Navigate } from "react-router-dom";
import { useSessionStorageListener } from "../../../hooks";

interface Props {
  validation: boolean;
}

const privateFragment = <Outlet />;
const publicFragment = <Navigate replace to={"/"} />;

export const AuthGuards: React.FC<Props> = ({ validation }): JSX.Element => {
  const isTokenExist = useSessionStorageListener!("access_token");

  return isTokenExist ? (
    validation ? (
      privateFragment
    ) : (
      publicFragment
    )
  ) : (
    <Navigate replace to={"/login"} />
  );
};
