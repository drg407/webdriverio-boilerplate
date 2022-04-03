import BlogPage from '../pages/BlogPage';

describe('Blog', () => {
    it('Get List of Recent Posts and Assert Length', async () => {
        // await browser.url('/blog');
        await BlogPage.open();


        const recentPostsList = await BlogPage.listRecentPosts;

        for (const item of recentPostsList) {
            const text = await item.getText();
            expect(text.length).toBeGreaterThan(10);
        }

        expect(recentPostsList).toHaveLength(5);
    });
});