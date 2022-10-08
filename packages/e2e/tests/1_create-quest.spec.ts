import {
  connectWithMetamask,
  executeTransaction,
  expectTextExistsInPage,
  fillInputBySelector,
  gotoApp,
  sleep,
  waitForSelectorAndClick,
} from '../helpers/utils';

describe('Create quest', () => {
  beforeAll(async () => {
    await gotoApp();
    await connectWithMetamask();
  });

  beforeEach(async () => {
    await page.bringToFront();
  });

  it('should have the quest created', async () => {
    await page.evaluate(`
            localStorage.setItem('FLAG.GOERLI.DUMMY_QUEST', true);
            window.location.reload();
          `);
    console.info('Dummy flag set');
    await sleep(3000);
    console.info('Sleep 2s');
    await waitForSelectorAndClick('.open-create-quest-btn');
    console.info('Open create quest button clicked');
    const questTitle = await page.$eval(
      '#title',
      (element: HTMLInputElement) => element.value,
    );
    console.info('Quest title found');
    await waitForSelectorAndClick('.next-step-btn');
    console.info('Next step button clicked');
    await page.evaluate(`
                 document.querySelector('#bounty-wrapper input')?.focus();
                 document.dispatchEvent(new FocusEvent('focusin'));
             `);
    console.info('Bounty input focused');
    await sleep(200);
    console.info('Sleep 200ms');
    await waitForSelectorAndClick('#bounty-wrapper li button');
    await waitForSelectorAndClick('.complete-create-quest-btn');
    console.info('Complete create quest button clicked');
    try {
      await expectTextExistsInPage('Approving quest deposit');
      await executeTransaction();
      console.info('Approve transaction completed');
    } catch (error) {
      // Aproving already done so we expect the second step to pop up
      await expectTextExistsInPage('Creating Quest');
    }
    await executeTransaction();
    console.info('Create quest transaction completed');
    await waitForSelectorAndClick('[title="Close"]');
    console.info('Modale closed');
    await expectTextExistsInPage(questTitle, 60000);
  });

  afterAll(async () => {
    await page.close();
  });
});
