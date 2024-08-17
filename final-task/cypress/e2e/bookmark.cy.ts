describe("Bookmark Functionality", () => {
  before(() => {
    cy.visit("/login");
    cy.get('input[name="email"]').type("dolphin.mulugeta@a2sv.org");
    cy.get('input[name="password"]').type("123!45908");
    cy.get('button[type="submit"]').click();

    cy.url().should("include", "/");
    cy.get('a[href*="opportunities"]').click();

    cy.url().should("include", "/opportunities");

    cy.get(
      ".relative.border.border-gray-400.m-4.rounded-lg.shadow-md.p-6.transform.transition.duration-200.ease-in-out",
      { timeout: 10000 }
    ).should("be.visible");
  });

  it("should bookmark and un-bookmark an opportunity", () => {
    // test 1: bookmark an opportunity
    cy.get(".opportunity-card")
      .first()
      .within(() => {
        cy.get("button").click();

        cy.get("svg").should("have.class", "text-blue-500");
      });

    cy.wait(2000);
    // test 2: un-bookmark the same opportunity
    cy.get(".opportunity-card")
      .first()
      .within(() => {
        cy.get("button").click();

        // verify the bookmark icon changes to indicate it is un-bookmarked
        cy.get("svg").should("have.class", "text-gray-500");
      });
  });
});
