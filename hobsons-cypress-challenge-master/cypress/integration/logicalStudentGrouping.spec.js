import HomePage from '../page-objects/pages/HomePage'
import IntersectPage from '../page-objects/pages/IntersectPage'


describe('Navigate to Intersect Page', ()=>{
    
        beforeEach(() => {
          cy.viewport(1280, 720)
        })
    

    it('Navigate to Home Page',()=>{
       HomePage.navigateToHome();
    })

    it('Home Page Renders Successfully', ()=>{
      HomePage.validateHomePageRender();
    })

    it('Navigate to Intersect Page from Learn More',()=>{
      HomePage.navigateToIntersectFromLearnMore();
    })


})

describe('Validate US Map Details', ()=>{
    
    beforeEach(() => {
      cy.viewport(1280, 720)
    })


it('Scroll to US Map',()=>{
   IntersectPage.scrollToUSMap();
})

it('Validate Overall Map Popup Message', ()=>{
    IntersectPage.validateOverallMapPopupMessages();
})

it('Click Map and Validate Message',()=>{
    IntersectPage.clickMapAndValidateMessage();
})

})