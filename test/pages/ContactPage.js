class ContactPage {
    open() {
        return browser.url('/contact');
    }

    get nameInput() {
        return $('.contact-name input');
    }

    get emailInput() {
        return $('.contact-email input');
    }

    get phoneInput() {
        return $('.contact-phone input');
    }

    get textboxInput() {
        return $('.contact-message textarea');
    }

    get submitButton() {
        return $('button[type=submit');
    }

    get alertSuccess() {
        return $('[role="alert"]');
    }

    async submitForm(name, email, phone, message) {
        await this.nameInput.addValue(name);
        await this.emailInput.addValue(email);
        await this.phoneInput.addValue(phone);
        await this.textboxInput.addValue(message);
        await this.submitButton.click();
    }
}

export default new ContactPage();