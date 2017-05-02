import { Ng2DeepDivePage } from './app.po';

describe('ng2-deep-dive App', () => {
  let page: Ng2DeepDivePage;

  beforeEach(() => {
    page = new Ng2DeepDivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
