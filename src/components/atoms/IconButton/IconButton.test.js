import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { IconButton } from "../../../components/atoms/IconButton";

describe("Components - IconButton", () => {
  const onClick = jest.fn();
  render(
    <IconButton
      onClick={onClick}
      text="Add Item"
      icon={"add"}
      testID="icon-button"
    />
  );
  const buttonElement = screen.getByTestId("icon-button");

  test("Event Click", () => {
    fireEvent.click(buttonElement);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
