import NavComponent from './components/NavComponent';

class HomePage {

    open() {
        return browser.url('/');
    }

    get getStartedButton() {
        return $('#get-started');
    }

    get logo() {
        return $('//img[@alt="Practice E-Commerce Site"]');
    }

    get headingElement() {
        return $('.elementor-widget-container h1');
    }

    get NavComponent() {
        return NavComponent;
    }
}

export default new HomePage();