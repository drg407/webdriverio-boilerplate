import ContactPage from '../pages/ContactPage';
const { faker } = require('@faker-js/faker');

describe('Contact', () => {
    it('Fill out fields, submit and assert', async () => {
        await ContactPage.open();
        await ContactPage.submitForm(faker.name.findName(), faker.internet.email(), faker.phone.phoneNumber(), faker.lorem.sentence());

        //assert
        const alert = ContactPage.alertSuccess;
        await expect(alert).toHaveTextContaining('Thanks');
    });
});