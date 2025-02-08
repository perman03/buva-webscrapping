Feature: cotizacion de seguros citi

    @citi
    Scenario: cotizacion de seguro de auto Citi
        Given I am on the banorte quoter home page
        And I select my car year
        And I select my car brand
        And I select my car model
        And I select my car version
        When I fill my personal info
        