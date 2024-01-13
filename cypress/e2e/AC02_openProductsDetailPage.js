import resources from '../plugins/index';
import homeScreenPage from '../pom/homeScreenPage';
import productsPage from '../pom/productsPage';


describe('AC02 Details from a product is displayed in Products Page', () => {
    beforeEach(() => {
        resources.LogInPage();
        homeScreenPage.actionLogin('standard_user');
    });

    it('Details from a product is displayed in Products Page.', () => {
        const productRandom = resources.productRandom()
        productsPage.accessDetailProduct(productRandom);
      });
   });