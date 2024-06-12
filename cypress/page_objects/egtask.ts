const locators = {
    dropdownOptions: '#dropdown-class-example',
    uploadImageSection: '.image-upload-wrapper h3',
    uploadImageBtn: 'input[type="file"]',
    imageUploaded: '.image-upload-wrapper img',
    openNewTabSection: '.switch-tab',
    openTabBtn: 'button#opentab',
    invokeModalSection: '.pull-right legend',
    enterNameAlertBox: 'input#name',
    alertBtn: '#alertbtn',
    confirmBtn: '#confirmbtn',
    showHideSection: 'legend:contains("Show/hide the input")',
    hideBtn: '#hide-textbox',
    showHideExampleBox: '.inputs.displayed-class',
    showBtn: '#show-textbox',
    hoverSection: 'legend:contains("Hover")',
    hoverBtn: '.hover-btn',
    hoverMenu: '.hover-content',
    iFrameSection: 'legend:contains("iFrame")',
    iframeHeaderLogo: 'a.header__logo'
}

class Egtask {
    goToPracticePage(taskHtmlPath: string) {
        cy.visit(taskHtmlPath)
    }

    verifyDropdownIsVisible() {
        cy.get(locators.dropdownOptions).should('be.visible')
    }
    selectDropdownOption(option: string) {
        cy.get(locators.dropdownOptions).select(option)
    }

    verifySelectedOption(option: string) {
        cy.get(locators.dropdownOptions).should('have.value', option)
    }

    verifyuploadImageSection() {
        cy.get(locators.uploadImageSection).should('be.visible')
    }
    clickAndUploadImage() {
        cy.get(locators.uploadImageBtn).selectFile('assets/img/testImage.png')
    }

    verifyUploadedImage() {
        cy.get(locators.imageUploaded)
            .should('have.attr', 'src')
            .should('match', /^blob:/)
    }

    verifyOpenNewTabIsVisible() {
        cy.get(locators.openNewTabSection).should('be.visible')
    }

    verifyOpenNewTabIsNotDiabled() {
        cy.get(locators.openTabBtn).should('not.have.attr', 'disabled')
    }

    clickOpenTab(targetName: string) {
        cy.get(locators.openTabBtn)
            .should('be.visible')
            .should('have.attr', 'target')
            .should('match', new RegExp(targetName))
    }

    verifyInvokeModalIsVisible() {
        cy.get(locators.invokeModalSection).should('be.visible')
    }

    confirmPopupMessage(buttonLabel: string, popupMessage: string) {
        const filePath = Cypress.env('alertFilePath')

        cy.task('readFile', filePath).then((text: string) => {
            cy.get(locators.enterNameAlertBox).type(text.trim())
            const finalMessage = popupMessage.replace('{name}', text.trim())

            if (buttonLabel.toLowerCase() === 'alert') {
                cy.get(locators.alertBtn).click()
                cy.on('window:alert', (alertText) => {
                    expect(alertText).to.contains(finalMessage)
                    cy.on('window:alert', () => true)
                })
            } else if (buttonLabel.toLowerCase() === 'confirm') {
                cy.get(locators.confirmBtn).click()

                cy.on('window:confirm', (confirmText) => {
                    expect(confirmText).to.contains(finalMessage)
                    cy.on('window:confirm', () => true)
                })
            }
        })
    }

    showHidesectionIsVisible() {
        cy.get(locators.showHideSection).should('be.visible')
    }

    verifyHideShowExampleBtnIsNotVisible() {
        cy.get(locators.hideBtn).click()
        cy.get(locators.showHideExampleBox).should('not.be.visible')
    }

    verifyHideShowExampleBtnIsVisible() {
        cy.get(locators.showBtn).click()
        cy.get(locators.showHideExampleBox).should('be.visible')
    }

    VerifyHoverSectionIsVisible() {
        cy.get(locators.hoverSection).should('be.visible')
    }

    hoverOnBtn() {
        cy.get(locators.hoverBtn).trigger('mouseover')
    }

    verifyHoverMenuIsVisible() {
        cy.get(locators.hoverMenu).should('be.visible')
    }

    verifyIframeIsVisible() {
        cy.get(locators.hoverSection).should('be.visible')
    }

    verifyIframeIsLoaded() {
        const iframeBody = cy
            .get('iframe')
            .its('0.contentDocument')
            .should('exist')
            .its('body')
            .should('not.be.undefined')
            .then(cy.wrap)
        iframeBody.find(locators.iframeHeaderLogo).should('be.visible')
    }

    readAndSubmitFormData() {
        cy.fixture('form').then((formData) => {
            cy.request(
                'POST',
                'https://jsonplaceholder.typicode.com/posts',
                formData
            ).then((response) => {
                expect(response.isOkStatusCode).to.equal(true)
            })
        })
    }
}

export default Egtask
