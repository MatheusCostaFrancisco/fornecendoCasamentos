import React, { useState } from "react";
import logo from "./logo.svg";

import { IconButton } from "./components/atoms/IconButton";
import { InputText } from "./components/atoms/inputText";

function App() {
  const [value, setValue] = useState<string | undefined>();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <header style={{ width: 400, margin: "0 auto" }}>
        <div>
          <IconButton circle onClick={() => console.log("matheus", value)} />
        </div>

        <div>
          <InputText value={value} label="Nome" onChange={handleChange} />
        </div>
      </header>
    </div>
  );
}

export default App;
