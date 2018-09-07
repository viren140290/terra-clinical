'const formFactor = browser.options.formFactor;
const viewports = formFactor ? Terra.viewports(formFactor) : Terra.viewports('tiny', 'small', 'medium', 'large', 'huge', 'enormous');

viewports.forEach((viewport) => {
  describe('Clinical Item View', () => {
    before(() => !formFactor ? browser.setViewportSize(viewport) : null);'

    describe('with one column displays', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/displays-item-view'));

      Terra.should.matchScreenshot({ selector: '#test-displays' });
      Terra.should.beAccessible();
      Terra.should.themeCombinationOfCustomProperties({
        testName: 'themed',
        selector: '#test-displays',
        properties: {
          '--terra-item-view-content-color': 'green',
          '--terra-item-view-content-primary-color': 'purple',
          '--terra-item-view-content-secondary-color': 'maroon',
        },
      });
    });

    describe('with two column displays', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/displays-item-view'));

      Terra.should.matchScreenshot({ selector: '#test-displays-two' });
      Terra.should.beAccessible();
    });

    describe('with two column and start displays', () => {
      before(() => {
        browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/displays-item-view');
      });

      Terra.should.matchScreenshot({ selector: '#test-displays-two-start' });
      Terra.should.beAccessible();
    });

    describe('with accessories', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/accessory-item-view'));

      Terra.should.matchScreenshot();
      Terra.should.beAccessible();
    });

    describe('with default comment set', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/comment-item-view'));

      Terra.should.matchScreenshot({ selector: '#ItemView1' });
      Terra.should.beAccessible();
    });

    describe('with truncated comment set', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/comment-item-view'));

      Terra.should.matchScreenshot({ selector: '#ItemView2' });
      Terra.should.beAccessible();
    });

    describe('with the full example word wrap - one column', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view'));

      Terra.should.matchScreenshot({ selector: '#ItemView-one-wrap' });
      Terra.should.beAccessible();
    });

    describe('with the full example word wrap - two column', () => {
      before(() => browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view'));

      Terra.should.matchScreenshot({ selector: '#ItemView-two-wrap' });
      Terra.should.beAccessible();
    });

    if (viewport.name != 'tiny') {
      describe('with the full example truncated - one truncated', () => {
        before(() => browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view'));

        Terra.should.matchScreenshot({ selector: '#ItemView-one-truncate' });
        Terra.should.beAccessible();
      });

      describe('with the full example truncated - two truncated', () => {
        before(() => browser.url('/#/raw/tests/terra-clinical-item-view/clinical-item-view/overflow-displays-item-view'));

        Terra.should.matchScreenshot({ selector: '#ItemView-one-truncate' });
        Terra.should.beAccessible();
      });
    }
  });
});
