Feature: User is able to perform the actions on the practice page

Background:
  Given I am on the pratice page of the website "http://localhost:3000/task.html"

Scenario: Verify that dropdown is funtional
  Given Dropdown section is visible
  When Click on the dropdown options, select "option2"
  Then Verify that the chosen option is displayed as selected

Scenario: Verify that 'Upload your image here' section is functional
  Given Upload your image here section is visible
  When Click on the Choose file button, upload an image
  Then Verify that uploaded image is displaying

Scenario: Verify that 'Open new tab' section is functional
  Given Open new tab section is visible
  When Open tab button is not disabled
  Then Verify that the button has target "_blank"

Scenario: Verify that 'invoke an alert' section is functional
  Given Invoke an alert and confirmation modal section is visible
  Then Fetch the name from the text file enter it, click on the "Alert" button and verify the popup message "Hello {name}, share this practice page and share your knowledge"
  Then Fetch the name from the text file enter it, click on the "Confirm" button and verify the popup message "Hello {name}, Are you sure you want to confirm?"

Scenario: Verify that 'Show/hide the input' section is functional
  Given Show hide the input section is visible
  Then Click on the Hide button and verify that the Hide - Show Example button is not visible
  Then Click on the Show button and verify that the Hide - Show Example button is visible

Scenario: Verify that Hover section is functional
  Given Hover section is visible
  When Hover on the Mouse Hover button
  Then Verify that on hover menu is showing


Scenario: Verify that iframe section is functional
  Given iframe section is visible
  Then iframe should exist and content should be loaded

Scenario: Submit data to an API request from fixtures
  Given Read the data from fixtures and submit the request

