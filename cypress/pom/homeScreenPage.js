import data from '../fixtures/data.json';

class homeScreenPage {
    elements = {        
      userNameLoginField: () => cy.get('[data-test="username"]'),
      passwordLoginField: () => cy.get('[data-test="password"]'),
      loginButton: () =>  cy.get('[data-test="login-button"]'),
      errorLoginText: () =>  cy.get('[data-test="error"]'),
    };
  
    actionLogin(role) { 
      const user = data.login[role]?.user;
      this.elements.userNameLoginField().click();
      this.elements.userNameLoginField().type(data.login[role].user);
      this.elements.passwordLoginField().click();
      this.elements.passwordLoginField().type(data.login[role].password);
      this.elements.loginButton().click();
    }
  
    errorLogin() {
      this.elements.errorLoginText().should('be.visible');
      this.elements.errorLoginText().contains(data.homeScreenPage.error_locked_out_user_message);
    }
  }
  
  export default new homeScreenPage();
