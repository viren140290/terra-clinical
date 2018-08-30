const formFactor = browser.options.formFactor;
const viewports = formFactor ? Terra.viewports(formFactor) : Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');

viewports.forEach((viewport) => {
  describe('Clinical Application', () => {
    before(() => !formFactor ? browser.setViewportSize(viewport) : null);

    describe('Renders the Application with provided AppDelegate', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-application/clinical-application/default-application'));

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });

    describe('Renders the Application without provided AppDelegate', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-application/clinical-application/no-app-delegate-application'));

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });
  });
});

