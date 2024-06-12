import Egtask from '../../page_objects/egtask';
import {
    Given,
    When,
    Then,
} from '@badeball/cypress-cucumber-preprocessor';

const egtaskSection = new Egtask();

Given('I am on the pratice page of the website {string}', function (taskHtmlPath) {
    egtaskSection.goToPracticePage(taskHtmlPath);
});

Given('Dropdown section is visible', function () {
    egtaskSection.verifyDropdownIsVisible();
});

When('Click on the dropdown options, select {string}', function (option) {
    egtaskSection.selectDropdownOption(option);
});

Then('Verify that the chosen option is displayed as selected', function () {
    egtaskSection.verifySelectedOption('option2');
});

Given('Upload your image here section is visible', function () {
    egtaskSection.VerifyuploadImageSection();
});

When('Click on the Choose file button, upload an image', function () {
    egtaskSection.clickAndUploadImage();

});

Then('Verify that uploaded image is displaying', function () {
    egtaskSection.verifyUploadedImage();
});

Given('Open new tab section is visible', function () {
    egtaskSection.verifyOpenNewTabIsVisible();
});

Given('Open tab button is not disabled', function () {
    egtaskSection.verifyOpenNewTabIsVisible();
});

Then('Verify that the button has target {string}', function (targetType) {
    egtaskSection.clickOpenTab(targetType);
});
