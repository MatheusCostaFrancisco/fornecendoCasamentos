/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
import useDebounce from "../../../hooks/useDebounce";
import { Icon } from "../../atoms/Icon/Icon";
import "./style.css";

export type SearchBarProps = {
  value?: string;
  placeholder?: string;
  onChange: (item: string) => void;
};

export function SearchBar({
  value,
  onChange,
  placeholder = "Digite um nome",
}: SearchBarProps) {
  const debounce = useDebounce(onChange, 1000);
  const [displayValue, setDisplayValye] = useState(value);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDisplayValye(event.target.value);
    debounce(event.target.value);
  };

  return (
    <div className="wrapper-search-bar">
      <div className="search-bar">
        <div className="search-bar__text">
          <input
            type="text"
            value={displayValue}
            placeholder={placeholder}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="search-bar__icon">
          <Icon icon="search" />
        </div>
      </div>
    </div>
  );
}
