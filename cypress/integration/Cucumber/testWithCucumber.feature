Feature: Automation testing using Cucumber

    I want to check if the ad is working as expected

    Background:
        Given I successfully navigate to the ad

    Scenario: As a user, I am able to see the ad image
        Then I should see the ad image correctly displayed

    Scenario: As a user, I am able to see the HUD correctly
        Then I should see see the bottom HUD correctly

    Scenario: As a user, I am able to see the close button
        Then I should see the close button after 6000 milliseconds

    Scenario: Download button should be clickable
        Then The download button should be a link

    Scenario Outline: Checking console log after clicking on a button
        When I click on the "<buttonLocator>"
        Then I should see "<log>" in the console log

        Examples:
            | buttonLocator                   | log                    |
            | #screen-primary-download-button | Chartboost.Utils.click |
            | #close-button                   | mraid.close            |

    Scenario: Snippet appears when clicking on Chartboost logo
        When I click on the Chartboost logo
        Then I should see a term of use snippet