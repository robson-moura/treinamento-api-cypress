
describe('Put Booking', () => {
    it('Alterar uma reserva usando token - @acceptance', () => {
        cy.token().then((resToken) => {            
            cy.allBookings().then((resAllbookig) => {                
                cy.updateBookingWithToken(resAllbookig.body[0].bookingid, resToken.body.token).then((response) => {
                    expect(response.status).to.eq(200)
                    expect(response.body.firstname).to.eq("João")
                })                
            })        
        })
    })

    it('Tentar alterar uma reserva quando o token não for enviado - @e2e', () => {                 
        cy.allBookings().then((resAllbookig) => {
            cy.updateBookingwithoutToken(resAllbookig.body[0].bookingid).then((response) => {
                expect(response.status).to.eq(403) 
            })                
        })     
    })

    it('Tentar alterar uma reserva quando o token enviado for inválido - @e2e', () => {                 
        cy.allBookings().then((resAllbookig) => {
            cy.updateBookingWithToken(resAllbookig.body[0].bookingid, '******').then((response) => {
                expect(response.status).to.eq(403)                         
            })                
        })     
    })

    it('Tentar alterar uma reserva que não existe - @e2e', () => {
        cy.token().then((resToken) => {        
            cy.updateBookingWithToken('00000', resToken.body.token).then((response) => {
                expect(response.status).to.eq(405)              
            })                
        })
    })
})