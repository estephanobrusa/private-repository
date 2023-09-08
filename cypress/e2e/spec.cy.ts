describe("visit page", () => {
  it("new release", () => {
    cy.visit("http://localhost:5173/");
  });
});

describe("click on album", () => {
  it("new release click album", () => {
    cy.visit("http://localhost:5173/");
    cy.get(":nth-child(1) > .sc-bcPKhP > .sc-grXZZQ").click();
    cy.url().should("include", "/album/");
    cy.contains("Song");
  });
});
