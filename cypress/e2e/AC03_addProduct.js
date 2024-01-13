import resources from '../plugins/index';
import homeScreenPage from '../pom/homeScreenPage';
import productsPage from '../pom/productsPage';
import productDetailPage from '../pom/productDetailPage';


describe('AC03 Add products to chart', () => {
    beforeEach(() => {
        resources.LogInPage();
        homeScreenPage.actionLogin('standard_user');
    });

    it('Add product from product details page', () => {
      let productRandom = resources.productRandom();
      productsPage.accessDetailProduct(productRandom);
      productDetailPage.elements.addProductToCart().eq(productRandom).click()
      productsPage.elements.cartBadgeText().should('contain.text', '1');
     });

     it('Add several products from product page', () => {
      productsPage.addAllProductsToCart();
      productsPage.elements.cartBadgeText().should('contain.text', '6');
      });
      
    after(() => {
     });
   });