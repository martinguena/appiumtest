describe('Running a sample test', () => {
  beforeEach(() => {
    $('~app-root').waitForDisplayed(51000, false);
  });

  it('Should increase the count by 4', () => {
    $('~increase-count').click();
    $('~increase-count').click();
    $('~increase-count').click();
    $('~increase-count').click();
    $('~increase-count').click();
  });
});
