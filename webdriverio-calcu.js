var webdriverio = require('webdriverio');
var expect = require('chai').expect;
var config = require('./helpers/desiredCapabilities').options;
var client = webdriverio.remote(config);

describe('CALCU Testing', function () {

    before(function () {
        this.timeout(50000);
        return client.init();
    });

    afterEach(function () {
        this.timeout(5000);
        return client.click('android=new UiSelector().resourceId("com.candl.athena:id/clear")');
    });

    //addition testing
    describe("Test CALCU addition", function () {
        this.timeout(15000);
        it("test-close-startup-screen", function () {
            return client.click('android=new UiSelector().resourceId("com.candl.athena:id/btn_close")');
        });

        it("test-two-positive-addition", function () {
            return client.click('android=new UiSelector().resourceId("com.candl.athena:id/digit5")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/plus")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/digit2")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/equal")')
                .element('android=new UiSelector().resourceId("com.candl.athena:id/display").childSelector(new UiSelector().className("android.widget.TextView"))')
                .getText()
                .then(function (text) {
                    console.log("Text we've got from output: ", text);
                    expect(text).to.equal('7');
                });
        });
        it("test-negative-positive-addition", function () {
            return client.click('android=new UiSelector().resourceId("com.candl.athena:id/minus")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/digit5")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/plus")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/digit2")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/equal")')
                .element('android=new UiSelector().resourceId("com.candl.athena:id/display").childSelector(new UiSelector().className("android.widget.TextView"))')
                .getText()
                .then(function (text) {
                    console.log("Text we've got from output: ", text);
                    expect(text).to.equal('-3');
                });
        });
        it("test-negative-addition", function () {
            return client.click('android=new UiSelector().resourceId("com.candl.athena:id/minus")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/digit5")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/plus")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/minus")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/digit2")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/equal")')
                .element('android=new UiSelector().resourceId("com.candl.athena:id/display").childSelector(new UiSelector().className("android.widget.TextView"))')
                .getText()
                .then(function (text) {
                    console.log("Text we've got from output: ", text);
                    expect(text).to.equal('-7');
                });
        });
    });

    //multiplication testing
    describe("Test CALCU multiplication", function () {
        this.timeout(15000);
        it("test-positive-multiplication", function () {
            return client.click('android=new UiSelector().resourceId("com.candl.athena:id/digit5")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/mul")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/digit2")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/equal")')
                .element('android=new UiSelector().resourceId("com.candl.athena:id/display").childSelector(new UiSelector().className("android.widget.TextView"))')
                .getText()
                .then(function (text) {
                    console.log("Text we've got from output: ", text);
                    expect(text).to.equal('10');
                });
        });
        it("test-positive-negative-multiplication", function () {
            return client.click('android=new UiSelector().resourceId("com.candl.athena:id/minus")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/digit5")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/mul")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/digit2")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/equal")')
                .element('android=new UiSelector().resourceId("com.candl.athena:id/display").childSelector(new UiSelector().className("android.widget.TextView"))')
                .getText()
                .then(function (text) {
                    console.log("Text we've got from output: ", text);
                    expect(text).to.equal('-10');
                });
        });
        it("test-negative-multiplication", function () {
            return client.click('android=new UiSelector().resourceId("com.candl.athena:id/minus")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/digit5")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/mul")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/minus")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/digit2")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/equal")')
                .element('android=new UiSelector().resourceId("com.candl.athena:id/display").childSelector(new UiSelector().className("android.widget.TextView"))')
                .getText()
                .then(function (text) {
                    console.log("Text we've got from output: ", text);
                    expect(text).to.equal('10');
                });
        });
        it("test-zero-multiplication", function () {
            return client.click('android=new UiSelector().resourceId("com.candl.athena:id/digit5")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/mul")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/digit0")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/equal")')
                .element('android=new UiSelector().resourceId("com.candl.athena:id/display").childSelector(new UiSelector().className("android.widget.TextView"))')
                .getText()
                .then(function (text) {
                    console.log("Text we've got from output: ", text);
                    expect(text).to.equal('0');
                });
        });
    });

    //division testing
    describe("Test CALCU division", function () {
        this.timeout(15000);
        it("test-divide-even", function () {
            return client.click('android=new UiSelector().resourceId("com.candl.athena:id/digit6")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/div")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/digit2")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/equal")')
                .element('android=new UiSelector().resourceId("com.candl.athena:id/display").childSelector(new UiSelector().className("android.widget.TextView"))')
                .getText()
                .then(function (text) {
                    console.log("Text we've got from output: ", text);
                    expect(text).to.equal('3');
                });
        });
        it("test-divide-odd", function () {
            return client.click('android=new UiSelector().resourceId("com.candl.athena:id/digit7")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/div")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/digit3")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/equal")')
                .element('android=new UiSelector().resourceId("com.candl.athena:id/display").childSelector(new UiSelector().className("android.widget.TextView"))')
                .getText()
                .then(function (text) {
                    console.log("Text we've got from output: ", text);
                    expect(text).to.include('2,33333333333');
                });
        });
        it("test-divide-positive-negative", function () {
            return client.click('android=new UiSelector().resourceId("com.candl.athena:id/digit6")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/div")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/minus")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/digit3")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/equal")')
                .element('android=new UiSelector().resourceId("com.candl.athena:id/display").childSelector(new UiSelector().className("android.widget.TextView"))')
                .getText()
                .then(function (text) {
                    console.log("Text we've got from output: ", text);
                    expect(text).to.equal('-2');
                });
        });

        it("test-divide-negative", function () {
            return client.click('android=new UiSelector().resourceId("com.candl.athena:id/minus")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/digit6")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/div")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/minus")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/digit3")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/equal")')
                .element('android=new UiSelector().resourceId("com.candl.athena:id/display").childSelector(new UiSelector().className("android.widget.TextView"))')
                .getText()
                .then(function (text) {
                    console.log("Text we've got from output: ", text);
                    expect(text).to.equal('2');
                });
        });
        it("test-divide-by-zero", function () {
            return client.click('android=new UiSelector().resourceId("com.candl.athena:id/digit5")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/div")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/digit0")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/equal")')
                .click('android=new UiSelector().resourceId("com.candl.athena:id/equal")')
                .element('android=new UiSelector().resourceId("com.candl.athena:id/display").childSelector(new UiSelector().className("android.widget.TextView"))')
                .getText()
                .then(function (text) {
                    console.log("Text we've got from output: ", text);
                    expect(text).to.equal('Erro');
                });
        });
    });

    //advanced testing
    // describe("Test CALCU advanced", function () {
    //     this.timeout(90000);
    //     it("test-", function () {
    //         return client
    //             .swipeDown('android=new UiSelector().resourceId("com.candl.athena:id/pullview_root")', 100, 3)
    //             .click('android=new UiSelector().resourceId("com.candl.athena:id/custom_key_0")')
    //             .click('android=new UiSelector().resourceId("com.candl.athena:id/btn_trig_units")')
    //             .click('android=new UiSelector().resourceId("com.candl.athena:id/digit9")')
    //             .click('android=new UiSelector().resourceId("com.candl.athena:id/digit0")')
    //             .click('android=new UiSelector().resourceId("com.candl.athena:id/equal")')
    //             .element('android=new UiSelector().resourceId("com.candl.athena:id/display").childSelector(new UiSelector().className("android.widget.TextView"))')
    //             .getText()
    //             .then(function (text) {
    //                 console.log("Text we've got from output: ", text);
    //                 expect(text).to.equal('1');
    //             });
    //     });
    // });

    after(function() {
        return client.end();
    });
});