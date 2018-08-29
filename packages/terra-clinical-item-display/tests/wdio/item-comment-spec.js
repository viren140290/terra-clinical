const formFactor = browser.options.formFactor;
const viewports = formFactor ? [formFactor] : Terra.viewports('tiny', 'medium', 'large');

viewports.forEach((viewport) => {
  describe('ItemComment', () => {
    before(() => viewports.length > 1 ? browser.setViewportSize(viewport) : null);

    describe('Default', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/comment/default-item-comment'));
      
      Terra.should.beAccessible();
      Terra.should.matchScreenshot();

      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-clinical-item-comment-color': '#75767d',
          '--terra-clinical-item-comment-inline-icon-color': 'rgba(117, 118, 125, 0.3)',
        },
      });
    });

    describe('Text', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/text-item-comment'));
    
      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });
  });
});
