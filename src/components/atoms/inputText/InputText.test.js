import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { InputText } from "../inputText";

const testID = "input-text";

describe("Components - InputText", () => {
  test("render", () => {
    render(
      <InputText
        label="Nome"
        onChange={() => {}}
        value="Name of client"
        placeholder="Write your name"
        testID={testID}
      />
    );

    const labelTextElement = screen.getByText("Nome");
    expect(labelTextElement).toHaveTextContent("Nome");

    const inputElement = screen.getByPlaceholderText("Write your name");
    expect(inputElement).toHaveValue("Name of client");

    fireEvent.change(inputElement, {});
  });

  test("Error log", async () => {
    render(
      <InputText
        label="Nome"
        onChange={() => {}}
        value="Name of client"
        placeholder="Write your name"
        errorLog="Nome inválido"
        testID={testID}
      />
    );

    const errorLogElement = await screen.findByText("Nome inválido");
    expect(errorLogElement).toBeValid();
  });
});
