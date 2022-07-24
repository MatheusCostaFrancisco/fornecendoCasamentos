/* eslint-disable @typescript-eslint/no-unused-vars */
import cypress from "cypress";

describe("Home Page", () => {
  beforeEach(() => {
    cy.visit("/Home");
  });

  it("Search by provider, render provider list", () => {
    cy.get('[placeholder="Digite o nome do fornecedor"]').should("be.visible");
    cy.get('[placeholder="Digite o nome do fornecedor"]').type("a");

    cy.get(".provider-list").should("be.visible");
  });
});
