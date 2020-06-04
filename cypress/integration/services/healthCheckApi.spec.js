describe('HealthCheck api', () => {
    it('Verificar se API está online - @healthcheck', () => {
        cy.token().then((resToken) => {            
            expect(resToken.status).to.eq(200)      
        })
    })
})