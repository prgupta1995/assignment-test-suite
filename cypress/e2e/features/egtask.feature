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