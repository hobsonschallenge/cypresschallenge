export default class BasePage{

    //Log Messages
   static logMessages(message){
     cy.log(message);
   }

   //Navigate to Application
   static navigateToApplication(appDomain){
       cy.visit('/');
       cy.url().should('include',appDomain);
   }


}