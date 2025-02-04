Feature: cotizacion de seguros autocompara

    Feature: cotizacion de seguros autocompara

    @santander
    Scenario: cotizacion de seguro de auto Santander
        Given I am on the santander quoter home page
        #When I select the type of car
        When I fill my car year
        When I select my car brand
        When I fill the personal data form
        Then I can see the quoter results
        When I view my car info and extract it