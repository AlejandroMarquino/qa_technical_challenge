import resources from '../plugins/index';
import homeScreenPage from '../pom/homeScreenPage';
import productsPage from '../pom/productsPage';



describe('AC07 See Product Information', () => {
    beforeEach(() => {
        resources.LogInPage();
        homeScreenPage.actionLogin('standard_user');
    });

    it('See the detail of all products.', () => {
        productsPage.accessDetailAllProducts()
     });
   

    it('See the detail from a product.', () => {
        let productRandom = resources.productRandom()
        productsPage.accessDetailProduct(productRandom)
      });
   });