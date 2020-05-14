/// <reference types="cypress" />

context('Dashboard', () => {
    before(() => {
      cy.exec('npm run clear-data && npm run create-test-data')
    })

    beforeEach(() => {
      cy.visit('http://localhost:3000')
    })
  
    it('should display content recieved from api request', () => {
      cy.get('.Item');
    });

    it('should filter data based on selection', () => {
      cy.contains('Nike Air VaporMax Plus');

      cy.get('.out').click();

      cy.contains('Classicx');

      cy.get('.try').click();

      cy.contains('AJ');

      cy.get('.Legend > :nth-child(5)').click();

      cy.contains('Nike Air VaporMax Plus');  
    });

    it('should load selected page data when icon clicked', () => {
      cy.contains('01|03');
      cy.get('.PaginatedList__Icons > :nth-child(1)').should('have.class', 'Icon--current');
      cy.get('.PaginatedList__Icons > :nth-child(2)').should('not.have.class', 'Icon--current');
      cy.get('.PaginatedList__Icons > :nth-child(3)').should('not.have.class', 'Icon--current');
      cy.get('.PaginatedList__Icons > :nth-child(2)').click();
      cy.contains('02|03');
      cy.get('.PaginatedList__Icons > :nth-child(1)').should('not.have.class', 'Icon--current');
      cy.get('.PaginatedList__Icons > :nth-child(2)').should('have.class', 'Icon--current');
      cy.get('.PaginatedList__Icons > :nth-child(3)').should('not.have.class', 'Icon--current'); 
    });

    it('should calculate total number of pages', () => {
      cy.get('.Icon').should('have.length', 3);
    });

    it('should auto rotate after 10 seconds', ()=> {
      cy.clock();
      cy.contains('01|03');
      cy.tick(10000);
      cy.contains('02|03'); 
    });
  })
  