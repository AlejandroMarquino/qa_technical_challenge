import resources from '../plugins/index';
import homeScreenPage from '../pom/homeScreenPage';
import productsPage from '../pom/productsPage';
import cartDetailPage from '../pom/cartDetailPage';
import checkoutPage from '../pom/checkoutPage';

describe('05 Buy products', () => {
    beforeEach(() => {
        resources.LogInPage();
        homeScreenPage.actionLogin('standard_user');
      });

  it('Able to complete the Checkout buying a product', () => {
    productsPage.addAllProductsToCart();
    productsPage.elements.cartButton().click();
    cartDetailPage.accessDetailProducts();
    checkoutPage.checkoutInformation();
    checkoutPage.checkoutOverview();
    checkoutPage.checkoutConfirmation();
 });
});