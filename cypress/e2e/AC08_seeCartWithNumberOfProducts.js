import resources from '../plugins/index';
import homeScreenPage from '../pom/homeScreenPage';
import productsPage from '../pom/productsPage';
import productDetailPage from '../pom/productDetailPage';



describe('AC07 See Product Information', () => {
    beforeEach(() => {
        resources.LogInPage();
        homeScreenPage.actionLogin('standard_user');
    });

    it('Add products to char and check the number of products.', () => {
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