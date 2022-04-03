describe('iFrame', () => {
    it('Working within iFrame', async () => {
        await browser.url('/iframe-sample');

        const iframe = await $('#advanced_iframe');

        await browser.switchToFrame(iframe);
        await expect($('#site-logo')).toExist();

        await browser.switchToParentFrame();
        await expect($('h1.tg-page-header__title')).toHaveText('IFrame Sample');
    });
});