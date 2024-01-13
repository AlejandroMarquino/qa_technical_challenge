import data from '../fixtures/data.json';
import productsPage from './productsPage';

class cartDetailPage {
    elements = {
      quantityProductText:() => cy.get('.cart_quantity'),
      titleProductText:() => cy.get('.inventory_item_name'),
      descriptionProductText:() => cy.get('.inventory_item_desc'),
      priceProductText:() => cy.get('.inventory_item_price'),
      removeButton:() => cy.get('.cart_button'),
      continueShoppingButton:() => cy.get('[data-test="continue-shopping"]'),
      checkoutButton:() => cy.get('[data-test="checkout"]'),
    }
  
    accessDetailProducts(){
      cy.get('.cart_item').each((products,index)=>{
        this.elements.quantityProductText().should('contain.text', data.products[index].quantity);
        this.elements.titleProductText().should('contain.text', data.products[index].name);
        this.elements.descriptionProductText().should('contain.text',data.products[index].description);
        this.elements.priceProductText().should('contain.text',data.products[index].price);
      })
    }
  
    removeProductCart(){
      productsPage.elements.cartButton().click();
      this.elements.removeButton().click();
    }
  }
  
  export default new cartDetailPage();