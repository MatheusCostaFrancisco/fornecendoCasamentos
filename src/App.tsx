import React, { useState } from "react";

import { IconButton } from "./components/atoms/IconButton";
import { InputText } from "./components/atoms/inputText";
import { Avatar } from "./components/atoms/Avatar";
import { Button } from "./components/atoms/Button/";
import { Evaluation } from "./components/atoms/Evaluation";
function App() {
  const [value, setValue] = useState<string | undefined>("");
  const [rank, setRank] = useState<number>(2);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const style = {
    marginTop: "30px",
    marginBttom: "30px",
    border: "1px solid #000",
    padding: "10px",
    borderRadius: "12px",
  };

  return (
    <div className="App">
      <header
        style={{
          width: "70%",
          margin: "0 auto",
          marginTop: 50,
          marginBottom: 50,
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h3>Components</h3>
        </div>
        <div style={style}>
          <h3>IconButton</h3>
          <br />
          <IconButton
            icon="adjust"
            circle
            backgroundColor="primaryDark"
            onClick={() => console.log("matheus", value)}
          />
        </div>

        <div style={style}>
          <h3>InputText</h3>
          <br />
          <InputText value={value} label="Nome" onChange={handleChange} />
        </div>

        <div style={style}>
          <h3>Avatar</h3>
          <br />
          <Avatar
            url={process.env.PUBLIC_URL + "/profile-pic-r.png"}
            alt="Logotipo"
          />
        </div>

        <div style={style}>
          <h3>Button</h3>
          <br />
          <Button
            label="Salvar"
            icon="check"
            backgroundColor="primary"
            rounded
            onClick={() => {
              console.log("Salvou");
            }}
          />
        </div>

        <div style={style}>
          <h3>Evaluation</h3>
          <br />
          <Evaluation
            rank={rank}
            onClick={(item: number) => {
              setRank(item);
            }}
          />
        </div>
      </header>
    </div>
  );
}

export default App;
