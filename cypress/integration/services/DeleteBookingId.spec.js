

describe('Delete Booking ID', () => {
    it('Excluir um reserva com sucesso - @acceptance', () => {
        cy.allBookings().then((resAllbookig) => {
            cy.token().then((resToken) => {                      
                cy.deleteBookingId(resAllbookig.body[0].bookingid, resToken.body.token).should((Response) => {      
                    expect(Response.body).to.eq("Created")                
                 })
            })
        })
    });

    it('Tentar excluir um reserva que não existe - @e2e', () => {
        cy.token().then((resToken) => {                      
            cy.deleteBookingId('15555', resToken.body.token).should((Response) => {      
                expect(Response.status).to.eq(405)          
            })
        })        
    });

    it('Tentar excluir uma reserva sem autorização - @e2e', () => {
        cy.allBookings().then((resAllbookig) => {                         
            cy.deleteBookingId(resAllbookig.body[0].bookingid, '').should((Response) => {      
                expect(Response.status).to.eq(403)                           
            })      
        })     
    });
});