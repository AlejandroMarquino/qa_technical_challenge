import homeScreenPage from '../pom/homeScreenPage';
import productsPage from '../pom/productsPage';
import resources from '../plugins/index';
import productDetailPage from '../pom/productDetailPage';

describe('AC05 Sort products', () => {
  beforeEach(() => {
    resources.LogInPage();
    homeScreenPage.actionLogin('standard_user');
  });
  it('Sort by descending alphabetical order', () => {
    productsPage.sortProducts('za','.inventory_item_name');
  });
  it('Sort by ascending alphabetical order', () => {
    productsPage.sortProducts('az','.inventory_item_name');
  });
  it('Sort by price from highest to lowest', () => {
    productsPage.sortProducts('hilo','.inventory_item_price');
  });
  it('Sort by price from lowest to highest', () => {
    productsPage.sortProducts('lohi','.inventory_item_price');
  });
});