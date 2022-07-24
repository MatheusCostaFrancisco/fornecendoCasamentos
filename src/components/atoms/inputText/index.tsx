import React, { useEffect, useState } from "react";
import "./style.css";

type InputTextProps = {
  label: string;
  value: string | undefined | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  testID?: string;
  errorLog?: string;
  type?: "text" | "email" | "password";
};

export const InputText = ({
  value,
  label,
  onChange,
  placeholder,
  errorLog,
  type,
  testID,
}: InputTextProps) => {
  const [state, setState] = useState<string | undefined | number>(value || "");
  const [errorClass, setErrorClass] = useState<string>("");

  useEffect(() => {
    setState(value);
  }, [value]);

  useEffect(() => {
    if (errorLog) {
      setErrorClass("input-text--error");
      return;
    }
    setErrorClass("");
  }, [errorLog]);

  return (
    <div className={`input-text${" " + errorClass}`}>
      <label className="input-text__label" htmlFor="inputText">
        {label}
      </label>
      <input
        type={type}
        className={`input-text__input${" " + errorClass}`}
        onChange={(event) => onChange(event)}
        id="inputText"
        data-testID={testID}
        placeholder={placeholder}
        value={state}
        maxLength={30}
      />
      {errorLog && (
        <div className="input-text__error">
          <p>{errorLog}</p>
        </div>
      )}
    </div>
  );
};
