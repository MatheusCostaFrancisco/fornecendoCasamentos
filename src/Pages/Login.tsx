import React, { useEffect, useState } from "react";
import { InputText } from "../components/atoms/InputText";
import Logo from "../assets/images/logowhite.png";
import { toast } from "react-toastify";
import { Button } from "../components/atoms/Button";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLog, setErrorLog] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

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

  const handleLogin = () => {
    setIsLoading(true);

    setTimeout(() => {
      if (!password || !email) {
        setErrorLog("Preenchimento Obrigatório");
        toast.error("Preencha os campos de email e senha para logar!");
      }
      console.log(typeof password);
      console.log(typeof email);
      if (password === "123456" && email === "matheusccontato@gmail.com") {
        toast.success("Logado com sucesso. Bem vindo a área do cliente!");
        navigate("/Home", {
          state: {
            user: "client",
          },
        });
      } else if (password === "123456" && email === "admin@buffetxpe.com") {
        toast.success("Logado com sucesso, Bem vindo a área do Fornecedor");
        navigate("/Home", {
          state: {
            user: "provider",
          },
        });
      } else {
        toast.error("Não foi possível identenficar o usuário.");
      }

      setIsLoading(false);
    }, 1000);
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
