import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { InputText } from "../inputText";

const testID = "input-text";

describe("Components - InputText", () => {
  render(
    <InputText
      label="Nome"
      onChange={() => {}}
      value="Name of client"
      placeholder="Write your name"
      testID={testID}
    />
  );

  test("render", () => {
    const labelTextElement = screen.getByText("Nome");
    expect(labelTextElement).toHaveTextContent("Nome");

    const inputElement = screen.getByPlaceholderText("Write your name");
    expect(inputElement).toHaveValue("Name of client");

    fireEvent.change(inputElement, {});
  });
});
