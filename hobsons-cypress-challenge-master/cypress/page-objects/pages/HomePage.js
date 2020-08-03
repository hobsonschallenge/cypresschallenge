import BasePage from "../BasePage"

var homePageSelectors = require('../../fixtures/homepage');//Selectors for HomePage
export default class HomePage extends BasePage{

    static navigateToHome(){
            BasePage.navigateToApplication(homePageSelectors.appDomain);
    }

    static validateHomePageRender(){
        cy.title().should('eq', homePageSelectors.applicationTitle);
        cy.get(homePageSelectors.homeBannerTitle).should('be.visible');
    }

    static navigateToIntersectFromLearnMore(){
        cy.get(homePageSelectors.IntersectBanner).trigger('mouseover',{force:true});
        cy.get(homePageSelectors.IntersectBannerLearnMore).should('be.visible');
        cy.get(homePageSelectors.IntersectLink).click();
    }


}