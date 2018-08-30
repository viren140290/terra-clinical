const formFactor = browser.options.formFactor;
const viewports = formFactor ? Terra.viewports(formFactor) : Terra.viewports('tiny', 'medium');

viewports.forEach((viewport) => {
  describe('ItemDisplay', () => {
    before(() => !formFactor ? browser.setViewportSize(viewport) : null);

    describe('default', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/default-item-display'));
      
      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('text style', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/text-style-item-display'));
    
      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-item-display-attention-color': 'pink',
          '--terra-item-display-secondary-color': 'green',
        },
      });
    });

    describe('disabled', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/disabled-item-display'));
    
      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        properties: {
          '--terra-item-display-disabled-inline-icon-color': 'rgba(255, 0, 0, 1)',
        },
      });
    });

    describe('icon', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/icon-item-display'));
      
      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });

    describe('scaling', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-display/clinical-item-display/display/scaling-icon-item-display'));
    
      Terra.should.beAccessible();
      Terra.should.matchScreenshot();
    });
  });
});
