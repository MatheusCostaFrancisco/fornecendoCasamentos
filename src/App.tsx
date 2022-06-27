import React, { useState } from "react";

import { IconButton } from "./components/atoms/IconButton";
import { InputText } from "./components/atoms/inputText";
import "../src/css/style.css";
function App() {
  const [value, setValue] = useState<string | undefined>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <header style={{ width: 400, margin: "0 auto", marginTop: 50 }}>
        <div>
          <IconButton
            icon="anchor"
            circle
            backgroundColor="primaryDark"
            onClick={() => console.log("matheus", value)}
          />
        </div>

        <div>
          <InputText value={value} label="Nome" onChange={handleChange} />
        </div>
      </header>
    </div>
  );
}

export default App;
