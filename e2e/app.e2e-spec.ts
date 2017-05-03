import { Hw1Page } from './app.po';

describe('hw1 App', () => {
  let page: Hw1Page;

  beforeEach(() => {
    page = new Hw1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
