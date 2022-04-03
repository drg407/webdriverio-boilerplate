const path = require('path');

describe('Upload Test', () => {
    it('Should upload a file', async () => {
        await browser.url('https://the-internet.herokuapp.com/upload');

        const filePath = path.join(__dirname, '../data/image.png');

        // Upload file
        const remoteFilePath = await browser.uploadFile(filePath);

        // Set file path value in the input field
        await $('#file-upload').setValue(remoteFilePath);

        // Click upload button
        await $('#file-submit').click();

        // Assertion
        await expect($('h3')).toHaveText('File Uploaded!');
    });

    it('Upload on hidden input', async () => {
        await browser.url('/cart/');

        const filePath = path.join(__dirname, '../data/image.png');
        const remoteFilePath = await browser.uploadFile(filePath);

        await browser.execute("document.querySelector('#upfile_1').className = ''");
        await $('#upfile_1').setValue(remoteFilePath);
        await $('#upload_1').click();

        await expect($('#wfu_messageblock_header_1_label_1')).toHaveTextContaining('uploaded successfully');
    });
});