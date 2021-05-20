// it("can go to home page", () => {
//     cy.visit("/");
//   });
  
  it("can display products", () =>
  {
    cy.visit("/");
    cy.get("li").contains("Mug two").click();
    cy.visit("/products/1");
    cy.get(("input[name='quantity'")).type(3);
    cy.get(("select")).select("green");
    cy.get(("input[type='submit'")).click();
  })


it("can display products", () =>
{
  cy.visit("/products/1");
  cy.get("a").contains("Back to home").click();
})