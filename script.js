state: "failed",
body: () => {
  cy.visit("http://localhost:3000/");

  cy.get(".price").each(($a, ind) => {
    if (ind === 0) {
      cy.get($a).invoke("attr", "contenteditable", "true").then($ab => {
        cy.get($ab).type(55, { force: true });
      });
    }
    if (ind === 1) {
      cy.get($a).invoke("attr", "contenteditable", "true").then($ab => {
        cy.get($ab).type(75, { force: true });
      });
    }
    if (ind === 2) {
      cy.get($a).invoke("attr", "contenteditable", "true").then($ab => {
        cy.get($ab).type(100, { force: true });
      });
    }
    if (ind === 3) {
      cy.get($a).invoke("attr", "contenteditable", "true").then($ab => {
        cy.get($ab).type(130, { force: true });
      });
    }
    if (ind === 4) {
      cy.get($a).invoke("attr", "contenteditable", "true").then($ab => {
        cy.get($ab).type(50, { force: true });
      });
    }
  });

  cy.get("button", { timeout: 5000 }).should("be.visible").click();

  cy.get("#ans").contains(410);
}



document.addEventListener('DOMContentLoaded', function() {
    var priceElements = document.querySelectorAll('.price');
    var totalPrice = 0;

    priceElements.forEach(function(priceElement) {
        totalPrice += parseInt(priceElement.textContent);
    });

    var totalDiv = document.getElementById('ans');
    totalDiv.textContent = 'Total: ' + totalPrice;
});
