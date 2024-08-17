describe("Navigation", () => {
  it("should navigate to the about page", () => {
    cy.visit("/");

    cy.get('a[href*="signup"]').click();

    cy.url().should("include", "/signup");

    cy.get("h1").contains("Sign Up");
  });
});
