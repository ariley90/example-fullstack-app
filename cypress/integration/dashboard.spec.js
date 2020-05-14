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

    xit('should update data every 30 seconds', () => {
      cy.get('.way').click();
      
      // cy.contains('01|03');
      // cy.exec('npm run create-test-data').then(() => {
        
      // });
      // cy.tick(31000);
      // cy.contains('01|05'); 
      // cy.get('.PaginatedList__Icons > :nth-child(3)').click();
      cy.get('.Item').should('have.length',2);
      cy.request('POST','http://localhost:5000/create',    {
        "product_name": "Vans",
        "category": "sports",
        "size": "6",
        "colour": "Gray",
        "status": "ON_THE_WAY",
        "customer_initials": "KO"
      });
        cy.clock();
        cy.wait(30000);
        // cy.get('.PaginatedList__Icons > :nth-child(3)').click();
        cy.get('.Item').should('have.length',3);

    });
  })
  