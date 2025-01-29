Feature: cotizacion de seguros mapfre
    @mapfre
    Scenario: cotizacion de seguro de auto Mapfre
        Given I am on the mapfre quoter home page
        When I select my car brand
        Then I select my car year
        Then I select my car model
        When I fill the personal data form
        Then I can see the quoter results
        When I view my car info and extract it