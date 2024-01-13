import data from '../fixtures/data.json';
import cartDetailPage from './cartDetailPage';


class checkoutPage {
  elements = {
    firstNameField:() => cy.get('[data-test="firstName"]'),
    lastNameField:() => cy.get('[data-test="lastName"]'),
    postalCodeField:() => cy.get('[data-test="postalCode"]'),
    cancelButton:() => cy.get('[data-test="cancel"]'),
    continueButton:() => cy.get('[data-test="continue"]'),
    infoLabel:() => cy.get('.summary_value_label'),
    subTotalLabel:() => cy.get('.summary_subtotal_label'),
    taxLabel:() => cy.get('.summary_tax_label'),
    totalLabel:() => cy.get('.summary_total_label'),
    finishButton:() => cy.get('[data-test="finish"]'),
    thanksMessageText:() => cy.get('.complete-header'),
    orderMessageText:() => cy.get('.complete-text'),
    completeImg:() => cy.get('.pony_express')
  }

  checkoutInformation(){
    cartDetailPage.elements.checkoutButton().click();
    this.elements.firstNameField().type(data.checkoutPage.first_name);
    this.elements.lastNameField().type(data.checkoutPage.last_name);
    this.elements.postalCodeField().type(data.checkoutPage.postal_code);
    this.elements.continueButton().click();
  }

  checkoutOverview(){
    cartDetailPage.accessDetailProducts('.cart_item');
    this.elements.infoLabel().eq(0).should('contain.text',data.checkoutPage.payment_information);
    this.elements.infoLabel().eq(1).should('contain.text',data.checkoutPage.shipping_information);
    this.elements.subTotalLabel().should('contain.text',data.checkoutPage.item_total);
    this.elements.taxLabel().should('contain.text',data.checkoutPage.tax);
    this.elements.totalLabel().should('contain.text',data.checkoutPage.total);
    this.elements.finishButton().click();
  }

  checkoutConfirmation(){
    this.elements.thanksMessageText().should('contain.text',data.checkoutPage.thanks_message);
    this.elements.orderMessageText().should('contain.text',data.checkoutPage.order_message);
    this.elements.completeImg().should('have.attr', 'alt', data.checkoutPage.alt_image )
  }


}

export default new checkoutPage();