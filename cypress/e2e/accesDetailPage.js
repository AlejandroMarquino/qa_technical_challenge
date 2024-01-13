import resources from '../plugins/index';
import homeScreenPage from '../pom/homeScreenPage';
import productsPage from '../pom/productsPage';
import productDetailPage from '../pom/productDetailPage';


describe('AC02 Details from a product is displayed in Products Page', () => {
    beforeEach(() => {
        resources.LogInPage();
        homeScreenPage.actionLogin('standard_user');
    });

    it('User can access to the Product Detail Page.', () => {
        const productRandom = resources.productRandom()
        cy.get(`[id="item_${productRandom}_title_link"]`).click()
        productDetailPage.checkDataProduct(productRandom); 
      });
   });