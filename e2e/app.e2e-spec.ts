import { MyAppPage } from './app.po';

describe('my-app App', function() {
  let page: MyAppPage;

  beforeEach(() => {
    page = new MyAppPage();
  });

  it('should display message saying Profile Browser', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Profile Browser');
  });
});
