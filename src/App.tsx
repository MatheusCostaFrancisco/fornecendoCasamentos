import React, { useState } from "react";

import { IconButton } from "./components/atoms/IconButton";
import { InputText } from "./components/atoms/inputText";
import { Avatar } from "./components/atoms/Avatar";
function App() {
  const [value, setValue] = useState<string | undefined>("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <div className="App">
      <header style={{ width: "70%", margin: "0 auto", marginTop: 50 }}>
        <div>
          <IconButton
            icon="adjust"
            circle
            backgroundColor="primaryDark"
            onClick={() => console.log("matheus", value)}
          />
        </div>

        <div>
          <InputText value={value} label="Nome" onChange={handleChange} />
        </div>

        <div>
          <Avatar
            url={process.env.PUBLIC_URL + "/profile-pic-r.png"}
            alt="Logotipo"
          />
        </div>
      </header>
    </div>
  );
}

export default App;
