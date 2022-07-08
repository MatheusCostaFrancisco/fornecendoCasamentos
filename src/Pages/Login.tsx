import React, { useState } from "react";
import { InputText } from "../components/atoms/InputText";
import Logo from "../assets/images/logowhite.png";
import { toast } from "react-toastify";
import { Button } from "../components/atoms/Button";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorLog, setErrorLog] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof event.target.value === "string") {
      setEmail(event.target.value);
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
      if (password === "123456" && email === "matheusccontato@gmail.com") {
        toast.success("Logado com sucesso");
      }

      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="background">
      <div className="wrapper">
        <div className="wrapper__logo">
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
