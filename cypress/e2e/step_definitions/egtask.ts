import Egtask from '@pageObjects/egtask'
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

const egtaskSection = new Egtask()

Given(
    'I am on the pratice page of the website {string}',
    function (taskHtmlPath: string) {
        egtaskSection.goToPracticePage(taskHtmlPath)
    }
)

Given('Dropdown section is visible', function () {
    egtaskSection.verifyDropdownIsVisible()
})

When(
    'Click on the dropdown options, select {string}',
    function (option: string) {
        egtaskSection.selectDropdownOption(option)
    }
)

Then('Verify that the chosen option is displayed as selected', function () {
    egtaskSection.verifySelectedOption('option2')
})

Given('Upload your image here section is visible', function () {
    egtaskSection.verifyuploadImageSection()
})

When('Click on the Choose file button, upload an image', function () {
    egtaskSection.clickAndUploadImage()
})

Then('Verify that uploaded image is displaying', function () {
    egtaskSection.verifyUploadedImage()
})

Given('Open new tab section is visible', function () {
    egtaskSection.verifyOpenNewTabIsVisible()
})

When('Open tab button is not disabled', function () {
    egtaskSection.verifyOpenNewTabIsVisible()
})

Then(
    'Verify that the button has target {string}',
    function (targetType: string) {
        egtaskSection.clickOpenTab(targetType)
    }
)

Given('Invoke an alert and confirmation modal section is visible', function () {
    egtaskSection.verifyInvokeModalIsVisible()
})

Then(
    'Fetch the name from the text file enter it, click on the {string} button and verify the popup message {string}',
    function (buttonLabel: string, popupMessage: string) {
        egtaskSection.confirmPopupMessage(buttonLabel, popupMessage)
    }
)

Given('Show hide the input section is visible', function () {
    egtaskSection.showHidesectionIsVisible()
})

Then(
    'Click on the Hide button and verify that the Hide - Show Example button is not visible',
    function () {
        egtaskSection.verifyHideShowExampleBtnIsNotVisible()
    }
)

Then(
    'Click on the Show button and verify that the Hide - Show Example button is visible',
    function () {
        egtaskSection.verifyHideShowExampleBtnIsVisible()
    }
)

Given('Hover section is visible', function () {
    egtaskSection.VerifyHoverSectionIsVisible()
})

When('Hover on the Mouse Hover button', function () {
    egtaskSection.hoverOnBtn()
})

Then('Verify that on hover menu is showing', function () {
    egtaskSection.verifyHoverMenuIsVisible()
})

Given('iframe section is visible', function () {
    egtaskSection.verifyIframeIsVisible()
})

Given('iframe should exist and content should be loaded', function () {
    egtaskSection.verifyIframeIsLoaded()
})

Given('Read the data from fixtures and submit the request', function () {
    egtaskSection.readAndSubmitFormData()
})
