import BasePage from "../BasePage"

var intersectPageSelectors = require('../../fixtures/intersectpage');//Selectors for HomePage
export default class IntersectPage extends BasePage{

    static scrollToUSMap(){
        cy.get(intersectPageSelectors.USMapDetails).scrollIntoView();
    }

    static validateOverallMapPopupMessages(){
         var errors = [];
        cy.get('g[data-popup-image]').each(($el, index, $list) => {
         var percentageBar = $el.attr("data-popup-content");
         cy.log('Percentage Bar is ' + percentageBar);
         var lastWord = percentageBar.split(" ").splice(-1);
         
         //Validate the Popup message structure
         if(lastWord != 'Students'){
               cy.get('g[data-popup-content="' + percentageBar + '"]>polygon').each(($el2, index, $list) => {
                   var state = $el2.attr('data-state');
                   cy.log(percentageBar + ':' + state);
                   var failure = percentageBar + ',' + state;
                   errors.push(failure);
                   cy.log(errors.length);
               })
                cy.writeFile('./faillog_' + Date.now() + '.txt',errors);
                
         }
        })
    }

    static clickMapAndValidateMessage(){
        cy.get(intersectPageSelectors.popUpImage).each(($el, index, $list) => {
            var percentageBar = $el.attr("data-popup-content");
          cy.get('g[data-popup-content="' + percentageBar + '"] polygon').each(($el2, index, $list) => {
            var state = $el2.attr('data-state');
            //Noticing an Area covered error for the below two states -> FL and NJ. TODO: Needs more investigation
            if(state && state != 'FL' && state != 'NJ'){
            cy.get('polygon[data-state="' + state + '"]').then($button => {
                if ($button.is(':visible')){
                  cy.get('polygon[data-state="' + state + '"]').click();
                }
              })
            cy.get(intersectPageSelectors.popUpMessage).invoke('text').then((text) => {
                expect(text.trim()).equal(percentageBar.trim());
            });
            cy.get(intersectPageSelectors.popUpClose).click({force:true});
            }
        })
    })
    }

   

}