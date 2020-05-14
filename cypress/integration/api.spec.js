/// <reference types="cypress" />

context('Api', () => {
    before(() => {
      cy.exec('npm run clear-data && npm run create-test-data')
    })
  
    it('should return items', () => {
      cy.request('http://localhost:5000/')
      .then( res => expect(res.body).to.have.length(9));
      cy.request('http://localhost:5000/')
      .then( res => console.log(res.body));
    });

    it('should create a new item', () => {
      cy.request('POST','http://localhost:5000/create',    {
        "product_name": "Vans",
        "category": "sports",
        "size": "6",
        "colour": "Gray",
        "status": "ON_THE_WAY",
        "customer_initials": "KO"
      })
      .then( res => expect(res.status).to.equal(201));
    });

    it('should fail creation if data is invalid', () => {
       cy.request({
         method:'POST',
         url:'http://localhost:5000/create',
         failOnStatusCode:false,
         body: {
            "product_name": "Vans",
            "category": "sports",
            "size": "6",
            "colour": "Gray",
            "status": "FAIL",
            "customer_initials": "KO"
         }
       })
       .then( res => expect(res.status).to.equal(400));
    });
      
    it('should delete an item based on id', () => {
      let itemId;
      cy.request('http://localhost:5000/')
      .then( res => {
        itemId = res.body[0]._id;
        cy.request('DELETE',`http://localhost:5000/delete/${itemId}`)
        .then( res => expect(res.status).to.equal(200));
      });
        
    });

    it('should fail to delete item if no matching item', () => {
      
      cy.request({
        method:'DELETE',
        url:'http://localhost:5000/delete/fakeid',
        failOnStatusCode:false
      })
        .then( res => expect(res.status).to.equal(404));
    });
});