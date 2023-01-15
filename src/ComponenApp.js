import { useSelector } from "react-redux";

const ComponenApp = () => {
  const statusLogin = useSelector((state) => state.isLogged);

  return (
    <p>
      Status Login di komponent lain <br />{" "}
      <strong>{statusLogin ? "Login" : "Logout"}</strong>
    </p>
  );
};

export default ComponenApp;
