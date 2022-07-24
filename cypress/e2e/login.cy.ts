/* eslint-disable @typescript-eslint/no-unused-vars */
import cypress from "cypress";

describe("Login Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Visit login page", () => {
    cy.visit("/");
  });

  it("Try login without informations", () => {
    cy.get('[data-testid="mail"]').should("be.visible");
    cy.get('[data-testid="pass"]').should("be.visible");

    cy.get(".button").click();

    cy.get(".Toastify__toast-container").should(
      "have.text",
      "Preencha os campos de email e senha para logar!"
    );
  });

  it("Try login", () => {
    cy.get('[data-testid="mail"]').type("matheusccontato@gmail.com");
    cy.get('[data-testid="pass"]').type("123456");

    cy.get(".button").click();

    cy.get(".Toastify__toast-container").should(
      "have.text",
      "Logado com sucesso. Bem vindo a área do cliente!"
    );
  });
});
