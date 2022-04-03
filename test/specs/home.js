import HomePage from '../pages/HomePage';
import allureReporter from '@wdio/allure-reporter';

describe("Home", () => {
    before(async () => {
        console.log('This runs before all tests once');
    });

    beforeEach(async () => {
        // This runs before each test.
        await HomePage.open();
    });

    it("Open URL and assert title", async () => {
        allureReporter.addSeverity('Minor');
        // Assert title
        expect(browser).toHaveTitle(
            "Practice E-Commerce Site – Automation Bro"
        );
    });

    it.skip("Should Open About page", async () => {
        //Open URL
        await browser.url("https://practice.automationbro.com/about");

        // Assert URL
        expect(browser).toHaveUrl(
            "https://practice.automationbro.com/about/"
        );
    });

    it("Should Click Get Started", async () => {
        // click Get Started by id
        await HomePage.getStartedButton.click();

        // Assert URL
        expect(browser).toHaveUrlContaining("get-started");
    });

    it("Should Assert not containing", async () => {
        // click Get Started by id
        await HomePage.getStartedButton.click();

        await HomePage.logo.click();

        // Assert URL
        expect(browser).not.toHaveUrlContaining("get-started");
    });

    it('Should click by XPATH', async () => {
        allureReporter.addFeature('Click by XPATH');
        await HomePage.open();        // using xpath
        await $(`//img[@alt="Practice E-Commerce Site"]`).click();
        expect(browser).not.toHaveUrlContaining("get-started");

    });

    it('Find element and assert text', async () => {
        await HomePage.open();        // Locate Heading Element
        const headingElement = await HomePage.headingElement;
        expect(headingElement).toHaveText("Think different. Make different.");

    });
});
