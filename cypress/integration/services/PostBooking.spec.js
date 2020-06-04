describe('Post Booking', () => {
    it('Criar uma nova reserva - @acceptance', () => {
        cy.postBookin().then((response) => {            
            expect(response.status).to.eq(200)            
            expect(response.body.booking.firstname).to.eq("Testador")
        })
    })
})