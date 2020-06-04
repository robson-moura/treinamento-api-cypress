import bookingIdsSchema from '../../contracts/bookingIds.contract'
import bookingSchema from '../../contracts/booking.contract'

describe('Get Booking IDs', () => {

    //Reservas com acceptance 
    it('Listar IDs das reservas - @acceptance', () => {
        cy.allBookings().should((Response) => {                   
            expect(Response.status).to.eq(200)
            expect(Response.body).not.to.be.null
        })
    });
    
    it('Listar uma reserva específica - @acceptance', () => {
        cy.allBookings().then((resAllbookig) => {
            cy.getBookingId(resAllbookig.body[0].bookingid).should((Response) => {      
                console.log(Response.body.bookingdates.checkin)                  
                expect(Response.body.id).not.to.be.null                
            })
        })
    });

    it('Listar IDs de reservas utilizando o filtro firstname - @acceptance', () => {
        cy.allBookings().then((resAllbookig) => {
            cy.getBookingId(resAllbookig.body[0].bookingid).should((ResponseBooking) => {                      
                expect(ResponseBooking.body.firstname).not.to.be.null                               
                cy.getBookingFirstname(ResponseBooking.body.firstname).should((Response) => {                       
                    expect(Response.body[0].bookingid).not.to.be.null                
                })   
            })
        })      
    });

    it('Listar IDs de reservas utilizando o filtro lastname - @acceptance', () => {
        cy.allBookings().then((resAllbookig) => {
            cy.getBookingId(resAllbookig.body[0].bookingid).should((ResponseBooking) => {                      
                expect(ResponseBooking.body.lastname).not.to.be.null                
                cy.getBookingLastname(ResponseBooking.body.lastname).should((Response) => {                                                                                                      
                    expect(Response.body[0].bookingid).not.to.be.null                
                })   
            })
        })              
    });

    it('Listar IDs de reservas utilizando o filtro checkin - @acceptance', () => {
        cy.allBookings().then((resAllbookig) => {
            cy.getBookingId(resAllbookig.body[0].bookingid).should((ResponseBooking) => {                      
                expect(ResponseBooking.body.bookingdates.checkin).not.to.be.null                
                cy.getBookingCheckin(ResponseBooking.body.bookingdates.checkin).should((Response) => {                                                                                                                        
                    expect(Response.body[0].bookingid).not.to.be.null                
                })      
            })
        })            
    });

    it('Listar IDs de reservas utilizando o filtro checkout - @acceptance', () => {
        cy.allBookings().then((resAllbookig) => {
            cy.getBookingId(resAllbookig.body[0].bookingid).should((ResponseBooking) => {                      
                expect(ResponseBooking.body.bookingdates.checkout).not.to.be.null                
                cy.getBookingCheckout(ResponseBooking.body.bookingdates.checkout).should((Response) => {                                                                                                                                            
                    expect(Response.body[0].bookingid).not.to.be.null                
                })      
            })
        })            
    });

    //Deu Internal Server Error, acho que era para ser checkin and checkout ...
    it('Listar IDs de reservas utilizando o filtro checkout and checkout - @acceptance', () => {
        cy.allBookings().then((resAllbookig) => {
            cy.getBookingId(resAllbookig.body[0].bookingid).should((ResponseBooking) => {                      
                expect(ResponseBooking.body.bookingdates.checkout).not.to.be.null                
                cy.getBookingCheckoutAndCheckout(ResponseBooking.body.bookingdates.checkout).should((Response) => {                        
                    expect(Response.body[0].bookingid).not.to.be.null                
                })      
            })
        })            
    });

    it('Listar IDs de reservas utilizando o filtro name, checkin and checkout date - @acceptance', () => {
        cy.allBookings().then((resAllbookig) => {
            cy.getBookingId(resAllbookig.body[0].bookingid).should((ResponseBooking) => {                      
                expect(ResponseBooking.body.firstname).not.to.be.null 
                expect(ResponseBooking.body.bookingdates.checkout).not.to.be.null 
                expect(ResponseBooking.body.bookingdates.checkin).not.to.be.null                                
                cy.getBookingCheckinAndCheckoutAndName(ResponseBooking.body.firstname, ResponseBooking.body.bookingdates.checkin, ResponseBooking.body.bookingdates.checkout).should((Response) => {                                            
                    expect(Response.body[0].bookingid).not.to.be.null                
                })      
            })
        })            
    });
       
    it('Visualizar erro de servidor 500 quando enviar filtro mal formatado - @e2e', () => {             
        cy.getBookingCheckoutAndCheckout('2020-05-17?').should((Response) => {                        
            expect(Response.status).to.eq(500)              
        })               
    });

    //Reservas com contract 
    it('Garantir o contrato do retorno da lista de reservas - @contract', () => {
        cy.allBookings().should((Response) => {
            expect(Response.body.id).not.to.be.null
            return bookingIdsSchema.validateAsync(Response.body)            
        })
    });

    it('Garantir o contrato do retorno de uma reserva específica - @contract', () => {
        cy.allBookings().then((resAllbookig) => {
            cy.getBookingId(resAllbookig.body[0].bookingid).should((Response) => {                
                expect(Response.body.id).not.to.be.null
                return bookingSchema.validateAsync(Response.body)            
            })
        })
    })
});