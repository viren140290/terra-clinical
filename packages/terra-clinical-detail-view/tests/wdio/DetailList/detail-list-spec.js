const formFactor = browser.options.formFactor;
const viewports = formFactor ? [formFactor] : Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');
const selector = '#root';

viewports.forEach((viewport) => {
  describe('Detail List', () => {
    before(() => viewports.length > 1 ? browser.setViewportSize(viewport) : null);

    describe('Displays a default Detail List with a title and list', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-list/normal-item-list'));

      Terra.should.matchScreenshot({ selector });
      Terra.should.beAccessible();
    });

    describe('Displays a default Detail List with a title and large list', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-detail-view/clinical-detail-view/detail-list/large-item-list'));

      Terra.should.matchScreenshot({ selector });
      Terra.should.beAccessible();
    });
  });
});
