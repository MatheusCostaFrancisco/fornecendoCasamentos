import React, { useEffect, useState } from "react";
import "./style.css";

type InputTextProps = {
  label: string;
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  testID?: string;
  errorLog?: string;
};

export const InputText = ({
  value,
  label,
  onChange,
  placeholder,
  errorLog,
}: InputTextProps) => {
  const [state, setState] = useState<string | undefined>(value || "");
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
    <div className={`input-text ${errorClass}`}>
      <label className="input-text__label" htmlFor="inputText">
        {label}
      </label>
      <input
        className={`input-text__input ${errorClass}`}
        onChange={(event) => onChange(event)}
        id="inputText"
        type="text"
        placeholder={placeholder}
        value={state}
      />
      {errorLog && (
        <div className="input-text__error">
          <p>{errorLog}</p>
        </div>
      )}
    </div>
  );
};
