import homeScreenPage from '../pom/homeScreenPage';
import productsPage from '../pom/productsPage';
import resources from '../plugins/index';

describe('AC06 Reset App', () => {
  beforeEach(() => {
    resources.LogInPage();
    homeScreenPage.actionLogin('standard_user');
  });
  it('Check the changes are deleted if Reset App.', () => {
     productsPage.sortProducts('lohi','.inventory_item_price');
     productsPage.resetApp();
     productsPage.addAllProductsToCart();
     productsPage.checkNumCart('6');
  });

  after(() => {
     productsPage.elements.menuBurgerButton().click()
     productsPage.elements.logoutMenuOptions().click()
    
  });
});