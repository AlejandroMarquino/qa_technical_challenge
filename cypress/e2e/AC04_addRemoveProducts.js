import resources from '../plugins/index';
import homeScreenPage from '../pom/homeScreenPage';
import productsPage from '../pom/productsPage';
import productDetailPage from '../pom/productDetailPage';


describe('AC04_addRemoveProducts', () => {
    beforeEach(() => {
        resources.LogInPage();
        homeScreenPage.actionLogin('standard_user');
    });

    it('Add products and the products are removable from chart,', () => {
        let productRandom = resources.productRandom();
        productsPage.addAllProductsToCart();
        productsPage.checkNumCart('6');
        productsPage.accessDetailProduct(productRandom);
        productDetailPage.elements.removeProductFromCart().eq(productRandom).click()
        productsPage.checkNumCart('5');
        productsPage.elements.cartButton().click();
        productsPage.checkNumCart('5');
      });
   });