Feature: Element matchers
    Elements can be located using the various matchers supported by Detox

    Background:
    Given: I tap on Counters section by text 

    @matchers @text
    Scenario: I can locate elements by text
    When: I tap on Count Days by text
    And: I tap on Count Cars by text
    And: I tap on Count Heads by text
    Then: I tap on Count Tips by text 

    @matchers @text
    Scenario: I can locate elements by label
    When: I tap on Count Days by label