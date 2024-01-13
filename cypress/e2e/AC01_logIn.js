
import homeScreenPage from '../pom/homeScreenPage';
import productsPage from '../pom/productsPage';
import resources from '../plugins/index';

describe('AC01 Log in Tests', () => {
  before(() => {
  });

  beforeEach(() => {
    resources.LogInPage();
  });

  it('Log in/Log out to Swag Labs (standard_user)', () => {
    homeScreenPage.actionLogin('standard_user');
    productsPage.verifyLogIn();
  });
  it('Not logging in to Swag Labs and getting an error (locked_out_user)', () => {
    homeScreenPage.actionLogin('locked_out_user');
    homeScreenPage.errorLogin();
  });

  it('Log in/Log out to Swag Labs (problem_user)', () => {
    homeScreenPage.actionLogin('problem_user');
    productsPage.verifyLogIn();
  });

  it('Log in/Log out to Swag Labs (performance_glitch_user)', () => {
    homeScreenPage.actionLogin('performance_glitch_user');
    productsPage.verifyLogIn();
  });
  after(() => {
     
  });
});