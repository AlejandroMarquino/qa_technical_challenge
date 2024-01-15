import homeScreenPage from '../pom/homeScreenPage';
import data from '../fixtures/data.json';

class resources {
  LogInPage() {
    cy.clearCookies();
    cy.visit(Cypress.config().baseUrl);
  }

  productRandom(){
    const productRandom = Math.floor(Math.random() * 5);
    return productRandom;
  }
}

export default new resources();