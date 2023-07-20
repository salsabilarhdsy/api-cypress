describe('Pet Store API Testing', () => {
    it('GET - store inventory', () => {
        cy.request('/store/inventory').as('getInventory');
        cy.get('@getInventory').then(inventory => {
            expect(inventory.status).to.equal(200);
        })
        
    });

})