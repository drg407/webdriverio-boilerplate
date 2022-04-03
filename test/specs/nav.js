import HomePage from '../pages/HomePage';
import allureReporter from '@wdio/allure-reporter';

describe('Nav Menu', () => {
    it('Should get text of all menu items', async () => {
        allureReporter.addFeature('Nav Menu');
        allureReporter.addSeverity('critical');

        await HomePage.open();

        const expectedLinks = [
            'Home',
            'About',
            'Shop',
            'Blog',
            'Contact',
            'My account',
        ];

        const actualLinks = [];
        const navLinks = await HomePage.NavComponent.navMenuLinks;

        for (const link of navLinks) {
            actualLinks.push(await link.getText());
        }

        expect(expectedLinks).toEqual(actualLinks);
    });
});