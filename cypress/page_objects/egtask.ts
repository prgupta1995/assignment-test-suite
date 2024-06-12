const locators = {
    dropdownOptions: '#dropdown-class-example',
    uploadImageSection: '.image-upload-wrapper h3',
    uploadImageBtn: 'input[type="file"]',
    imageUploaded: '.image-upload-wrapper img',
    openNewTabSection: '.switch-tab',
    openTabBtn: 'button#opentab',

};

class Egtask {
    goToPracticePage(taskHtmlPath) {
        cy.visit(taskHtmlPath);
    }

    verifyDropdownIsVisible() {
        cy.get(locators.dropdownOptions).should('be.visible');
    }
    selectDropdownOption(option) {
        cy.get(locators.dropdownOptions).select(option);
    }

    verifySelectedOption(option) {
        cy.get(locators.dropdownOptions).should('have.value', option);
    }

    VerifyuploadImageSection() {
        cy.get(locators.uploadImageSection).should('be.visible');
    }
    clickAndUploadImage() {
        cy.get(locators.uploadImageBtn).selectFile('assets/img/testImage.png');
    }

    verifyUploadedImage() {
        cy.get(locators.imageUploaded).should('have.attr', 'src').should('match', /^blob:/);

    }

    verifyOpenNewTabIsVisible() {
        cy.get(locators.openNewTabSection).should('be.visible');
    }

    verifyOpenNewTabIsNotDiabled() {
        cy.get(locators.openTabBtn).should('not.have.attr', 'disabled');
    }

    clickOpenTab(targetName) {
        cy.get(locators.openTabBtn).should('be.visible').should('have.attr', 'target').should('match', new RegExp(targetName));
    }
}

export default Egtask;
