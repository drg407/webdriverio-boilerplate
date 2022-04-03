# WebdriverIO_V7-Boilerplate

This is a boilerplate project that uses WebdriverIO v7 and JavaScript. It includes examples of the PageObject pattern and some practical examples for using WebdriverIO to build an automated test suite with Mocha & Chai.

## Getting Started

```code
git clone git@github.com:drg407/webdriverio-boilerplate.git
cd webdriverio-boilerplate
npm install
npx wdio
```

## Page Objects

[Page Objects](https://martinfowler.com/bliki/PageObject.html) are abstractions for the UI elements that you interact with in your tests. You can create getter functions for each element that you need to access. You can create convenient methods like `clickSignInButton()` which allow you to write more concise tests.

### Pages

```javascript
import BasePage from './BasePage';

class LandingPage extends BasePage {
  public openPage() {
    return browser.url('');
  }
  get headlineBanner() {
    return $('=Headlines');
  }
  get signInButton() {
    return $('//a[@class="gb_4 gb_5 gb_le gb_5c"]');
  }
  public clickSignInButton() {
    this.waitAndClick(this.signInButton);
  }
}
export default new LandingPage();
```

### Tests

```javascript
import { assert, expect } from 'chai';
import LandingPage from 'src/pages/LandingPage';


describe('Landing page', () => {
  it('should open', () => {
    browser.deleteAllCookies();
    LandingPage.openPage();
    expect(browser.getUrl()).to.contain('news.google.com');
  });

  it('should have a Headline Banner', () => {
    expect(LandingPage.headlineBanner.getText()).to.contain('Headlines');
  });

  it('should click to sign in', () => {
    LandingPage.clickSignInButton();
    expect(browser.getUrl()).to.contain('signin');
  });
});
```

## Test examples

The tests in this project use [Automation Bro's Homepage](https://practice.automationbro.com) to demonstrate how to interact with some of the most common UI elements you will encounter. More examples can be found in the [official documentation](https://webdriver.io/docs/api.html).

Run tests with the following command:

```code
npx wdio --spec test/specs/**/*.js
```

## CI examples

//TODO

## Reporters

This projects uses both the [spec-reporter](https://webdriver.io/docs/spec-reporter.html) and [allure-reporter](https://webdriver.io/docs/allure-reporter.html).  Output is written to allure-results folder.

## Acknowledgements

Automation Bro for creating a great tutorial.
