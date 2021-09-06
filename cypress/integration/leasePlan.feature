Feature: Check filtering functionality of leaseplan website

Scenario: Applying filter should show the filter value
    Given I navigate to leasePlan page
    When I select 'Audi' in Make & Model filter
    Then I should see 'Audi' as filter value
    
Scenario: User should be able to reset filter
    Given I navigate to leasePlan page
    When I select 'Audi' in Make & Model filter
    And I select delete filter
    Then I should see 'Make & Model' as filter value

Scenario: User should be able to see the cards as per filter
    Given I navigate to leasePlan page
    When I select 'Audi' in Make & Model filter
    Then I should see 'Audi' in filter results heading

Scenario: User should be able to see only best deals if filter applied
    Given I navigate to leasePlan page
    When I select 'Best deals' in Popular filter
    Then I should see best deal banner in card

Scenario: User should be able to use quick filters
    Given I navigate to leasePlan page
    When I select 'Electric' in quick filters
    And I open More filters
    Then I should see 'Electric' as selected in 'fuelType' section