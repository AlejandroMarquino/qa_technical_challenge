import data from '../fixtures/data.json';

class productDetailPage {
    elements = {
      backButton:() => cy.get('[data-test="back-to-products"]'),
      imageProductDetailText:() => cy.get('.inventory_details_img_container > img'),
      nameProductDetailText:() => cy.get('.inventory_details_name'),
      descriptionProductDetailText:() => cy.get('.inventory_details_desc'),
      priceProductDetailText:() => cy.get('.inventory_details_price'),
      addProductToCart:() => cy.get('.btn_inventory'),
      removeProductFromCart:() => cy.get('.btn_inventory'),
    }
  
    checkDataProduct(index){
      this.elements.imageProductDetailText().should('have.attr', 'alt', data.products[index].name)
      this.elements.nameProductDetailText().should('contain.text', data.products[index].name);
      this.elements.descriptionProductDetailText().should('contain.text', data.products[index].description);
      this.elements.priceProductDetailText().should('contain.text', data.products[index].price);
    }
  }
  
  export default new productDetailPage();