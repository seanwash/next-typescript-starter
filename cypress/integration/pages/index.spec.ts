describe("HomePage", function () {
  beforeEach(function () {
    cy.visit("/");
  });

  it("should render", function () {
    cy.contains(/welcome to next.js/i);
  });
});

export {};
