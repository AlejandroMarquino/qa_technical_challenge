import data from '../fixtures/data.json';
import productDetailPage from './productDetailPage';
import cartDetailPage from './cartDetailPage';
import resources from '../plugins/index';

class productsPage {
  elements = {
    menuBurgerButton: () => cy.get('[id="react-burger-menu-btn"]'),
    allItemsMenuOption: () => cy.get('[id="inventory_sidebar_link"]'),
    aboutMenuOptions: () => cy.get('[id="about_sidebar_link"]'),
    logoutMenuOptions: () => cy.get('[id="logout_sidebar_link"]'),
    resetAppStateMenuOptions: () => cy.get('[id="reset_sidebar_link"]'),
    closeMenuButton: () => cy.get('[id="react-burger-cross-btn"]'),
    titleText: () => cy.get('.title'),
    filterSelect:() => cy.get('[data-test="product_sort_container"]'),
    sortByNameAtoZ:() => cy.get('[value="az"]'),
    sortByNameZtoA:() => cy.get('[value="za"]'),
    sortByPriceLowToHigh:() => cy.get('[value="lohi"]'),
    sortByPriceHighToLow:() => cy.get('[value="hilo"]'),
    addArticleButton:() => cy.get('[data-test="add-to-cart-sauce-labs-backpack"]'),
    removeArticleButton:() => cy.get('[data-test="remove-sauce-labs-backpack"]'),
    titleProductText:() => cy.get('.inventory_item_name'),
    descriptionProductText: () => cy.get('.inventory_item_desc'),
    imageProductText:() => cy.get('.inventory_item_img > a > img'),
    priceProductText: () => cy.get('.inventory_item_price'),
    cartButton: () => cy.get('.shopping_cart_link'),
    cartBadgeText:() => cy.get('.shopping_cart_badge')
  }

  verifyLogIn(){
    this.elements.titleText().should('contain.text', data.productsPage.title);
  }

  accessDetailProduct(productRandom){
    cy.get('.inventory_item').eq(productRandom)
    this.elements.titleProductText().eq(productRandom).then(($ele)=>{expect($ele.text()).to.equal(data.productsPage.products[productRandom].name)})
    this.elements.descriptionProductText().eq(productRandom).then(($ele)=>{expect($ele.text()).to.equal(data.productsPage.products[productRandom].description)})
    this.elements.priceProductText().eq(productRandom).then(($ele)=>{expect($ele.text()).to.equal(data.productsPage.products[productRandom].price)})
    this.elements.imageProductText().eq(productRandom).should('have.attr', 'alt', data.productsPage.products[productRandom].name)
  }

  accessDetailAllProducts(){
    cy.get('.inventory_item').each((products,index) =>{
    cy.get(`[id="item_${index}_img_link"]`).click();
    productDetailPage.checkDataProduct(index);
    productDetailPage.elements.backButton().click();
    })
 }

  sortProducts(order, classOrder){
    this.elements.filterSelect().select(data.productsPage.productsOrder[order].option);
    var productList = []
    cy.get(classOrder).
    each(($ele)=>{
      productList.push($ele.text())})
      .then(() =>{
        expect(productList[0]).to.equal(data.productsPage.productsOrder[order].first)
        expect(productList[productList.length-1]).to.equal(data.productsPage.productsOrder[order].last)
    })
  }

 addAllProductsToCart(){
  cy.get('a > .inventory_item_name').each(($text,index)=>{
    const nameProduct = $text.text()
    cy.get(`[data-test="add-to-cart-${nameProduct.toLowerCase().replaceAll(' ', '-')}"]`).click();                  
    this.elements.cartBadgeText().should('contain.text', index+1);
    this.elements.cartButton().click();
    cartDetailPage.elements.continueShoppingButton().click()
  })
 }
 
 removeAllProductsFromCart(){
  cy.get('.shopping_cart_badge').should('contain.text', '6')
  cy.get('a > .inventory_item_name').each(($text,index)=>{
    const nameProduct = $text.text()
    cy.get(`[data-test="remove-${nameProduct.toLowerCase().replaceAll(' ', '-')}"]`).click();
    if (index <5) this.elements.cartBadgeText().should('contain.text', (6-(index+1)))})
  }

 
  resetApp(){
    cy.get('.inventory_item_price').eq(0).should('contain.text', data.productsPage.productsOrder.lohi.first)
    this.elements.menuBurgerButton().click()
    this.elements.resetAppStateMenuOptions().click()
    this.elements.closeMenuButton().click()
    cy.reload()
    cy.get('.inventory_item_name').eq(0).should('contain.text', data.productsPage.productsOrder.az.first)
  }

  checkNumCart(numProductsChart){
    this.elements.cartBadgeText()
    .then(()=>{this.elements.cartBadgeText().should('contain.text', numProductsChart);})
  }
}

export default new productsPage();