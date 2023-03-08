import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../components/Loader";
import Error from "./ErrorPage";

const AuthWrapper = ({ children }) => {
  const { isLoading, error } = useAuth0();

  if (isLoading) {
    return <Loader />;
  }

  if (error) {
    return <Error />;
  }

  return <>{children}</>;
};
export default AuthWrapper;
