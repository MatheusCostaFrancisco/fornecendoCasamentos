import React, { useEffect, useState } from "react";
import { InputText } from "../components/atoms/InputText";
import Logo from "../assets/images/logowhite.png";
import { toast } from "react-toastify";
import { Button } from "../components/atoms/Button";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import userController from "../infra/controllers/user.controller";
import clientController from "../infra/controllers/client.controller";
import { login } from "../redux/userSlice";
import providersController from "../infra/controllers/providers.controller";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLog, setErrorLog] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      setEmail("");
      setPassword("");
    };
  }, []);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof event.target.value === "string") {
      setEmail(event.target.value);
      setErrorLog("");
    }
  };

  const handleChangePass = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof event.target.value === "string") {
      setPassword(event.target.value);
    }
  };

  const handleLogin = async () => {
    setIsLoading(true);

    if (!password || !email) {
      setErrorLog("Preenchimento Obrigatório");
      toast.error("Preencha os campos de email e senha para logar!");
      return;
    }

    const user = await userController.authentication(email, password);

    if (user) {
      if (user.type === "client") {
        const getClient = await clientController.authentication(
          email,
          password
        );
        dispatch(
          login({
            valueClient: getClient,
            type: "client",
          })
        );
        toast.success("Logado com sucesso. Bem vindo a área do cliente!");
      } else {
        const getProvider = await providersController.authentication(
          email,
          password
        );

        dispatch(
          login({
            valueProvider: getProvider,
            type: "provider",
          })
        );
        toast.success("Logado com sucesso, Bem vindo a área do Fornecedor");
      }
      navigate("/Home");
    } else {
      toast.error("Não foi possível identenficar o usuário.");
    }
    setIsLoading(false);
  };

  return (
    <div className="background">
      <div className="wrapper__Login">
        <div className="wrapper__Login__logo">
          <img src={Logo} alt="Logotipo da empresa" />
        </div>

        <InputText
          key="InputEmail"
          value={email}
          onChange={handleChangeEmail}
          label="Email"
          type="email"
          errorLog={errorLog}
        />
        <InputText
          key="InputPass"
          value={password}
          onChange={handleChangePass}
          label="Senha"
          type="password"
          errorLog={errorLog}
        />

        <Button
          label="Entrar"
          onClick={handleLogin}
          rounded
          loading={isLoading}
        />
      </div>
    </div>
  );
}
