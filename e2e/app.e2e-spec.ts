import { Angular2WcIntropPage } from './app.po';

describe('angular2-wc-introp App', function() {
  let page: Angular2WcIntropPage;

  beforeEach(() => {
    page = new Angular2WcIntropPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
