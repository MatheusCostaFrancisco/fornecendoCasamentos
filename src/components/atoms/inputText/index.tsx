import React, { useEffect, useState } from "react";
import "./style.css";

type InputTextProps = {
  label: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  testID?: string;
};

export const InputText = ({
  value,
  label,
  onChange,
  placeholder,
  testID,
}: InputTextProps) => {
  const [state, setState] = useState<string | undefined>();

  useEffect(() => {
    setState(value);
  }, [value]);

  return (
    <div className="input-text">
      <label className="input-text__label" htmlFor="inputText">
        {label}
      </label>
      <input
        className="input-text__input"
        onChange={(event) => onChange(event)}
        id="inputText"
        type="text"
        placeholder={placeholder}
        value={state}
      />
    </div>
  );
};
