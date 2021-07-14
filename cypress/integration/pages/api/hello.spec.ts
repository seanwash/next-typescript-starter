describe("/api/hello", function () {
  it("should greet the world", function () {
    cy.request({ method: "GET", url: "/api/hello" })
      .its("body")
      .should("contain", { hello: "world" });
  });
});

export {};
