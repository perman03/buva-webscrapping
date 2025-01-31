Feature: cotizacion de seguros banorte

    @gnp
    Scenario: cotizacion de seguro de auto GNP
        Given I am on the gnp quoter home page
        When I select my car type
        Then I select my car year
        Then I select my car brand
        Then I select my car subbrand
        Then I select my car version              
        When I fill the personal data form
        Then I denied contact
        Then I accept the privacy notice
        Then I accept the conditions and terms
        Then I can see the quoter results
        When I view my car info and extract it