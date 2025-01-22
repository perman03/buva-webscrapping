Feature: cotizacion de seguros banorte

    @banorte
    Scenario: cotizacion de seguro de auto Banorte
        Given I am on the banorte quoter home page
        When I select my car type
        And I select my car year
        And I select my car brand
        And I select my car version
        And I introduce my cp code for continue with the second phase
        Then I can see the personal data form
        When I fill the personal data form
        Then I can see the quoter results
        When I view my car info and extract it