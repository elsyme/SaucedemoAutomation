/// <reference types="Cypress" />


 describe('saucedemo', () => {
   it ('should test app ',()=> {
   
    cy.visit("/")
    cy.url().should('contain','saucedemo');
   //login  
    cy.get('#user-name').type('standard_user')
    cy.get('#password').type('secret_sauce')
    cy.get('#login-button').should ("be.visible");
    cy.get('#login-button').click()
    //inventory list
    cy.url().should ('include','/inventory.html');
    cy.get('#inventory_container').should("be.visible");
    cy.get('#header_container > div.header_secondary_container > span').should('be.visible');
    cy.get("select")
    .select("Price (low to high)")
    cy.get('#item_2_title_link > div').should('include.text','Sauce Labs Onesie')
    cy.get('[data-test="product_sort_container"]')
  // filter page
    it ('should select an option from the dropdown',()=>{

  });
  
  cy.get('[data-test="product_sort_container"]').select('Price (low to high)').should ('have.value','lohi');
  cy.get("select")
  .select("Price (high to low)")
  cy.get('#item_5_title_link > div').should('include.text','Sauce Labs Fleece Jacket')
  cy.get('[data-test="product_sort_container"]')

  cy.get('[data-test="product_sort_container"]').select('Price (high to low)').should ('have.value','hilo');
//Add product to cart 
cy.get('#add-to-cart-sauce-labs-onesie'). should('be.visible');
cy.get('#add-to-cart-sauce-labs-onesie').click({ force: true })
cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click({ force: true })
cy.get('#shopping_cart_container').should('be.visible');
cy.get('.shopping_cart_link').click({ force: true })
//remove
cy.get('[data-test="remove-sauce-labs-onesie"]').should('be.visible')
cy.get('[data-test="remove-sauce-labs-onesie"]').click({ force: true })
//checkout
cy.get('#header_container > div.header_secondary_container').should('be.visible')
cy.get('#cart_contents_container > div > div.cart_list > div.cart_item').should('be.visible')
cy.get('[data-test="checkout"]').should('be.visible')
cy.get('[data-test="checkout"]').click({ force: true })
//logout



cy.get('#react-burger-menu-btn').should('be.visible')
cy.get('#react-burger-menu-btn').click({ force: true })
cy.get('#logout_sidebar_link').click({ force: true })
   
  })
})
