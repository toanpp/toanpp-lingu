Feature: User can be login

  As a user of application
  I want to login
  So that I can do something else

  Scenario: login as user name toanpp@twin.vn
    Given I'm on the home page
    When I click on sign in
    Then sign in board pop up
