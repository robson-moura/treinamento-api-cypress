
// GET
Cypress.Commands.add('allBookings', () => {
    cy.request({
        method: 'GET',
        url: '/booking',
        failOnStatusCode: false 
    })
})

// GET
Cypress.Commands.add('getBookingId', (id) => {
    cy.request({
        method: 'GET',
        url: `/booking/${id}`,
        failOnStatusCode: false 
    })
})

// GET
Cypress.Commands.add('getBookingFirstname', (firstname) => {
    cy.request({
        method: 'GET',
        url: `/booking?firstname=${firstname}`,
        failOnStatusCode: false 
    })
})

// GET
Cypress.Commands.add('getBookingLastname', (lastname) => {
    cy.request({
        method: 'GET',
        url: `/booking?lastname=${lastname}`,
        failOnStatusCode: false 
    })
})

// GET
Cypress.Commands.add('getBookingCheckin', (checkin) => {
    cy.request({
        method: 'GET',
        url: `/booking?checkin=${checkin}`,
        failOnStatusCode: false 
    })
})

// GET
Cypress.Commands.add('getBookingCheckout', (checkout) => {
    cy.request({
        method: 'GET',
        url: `/booking?checkout=${checkout}`,
        failOnStatusCode: false 
    })
})

// GET
Cypress.Commands.add('getBookingCheckoutAndCheckout', (checkout) => {
    cy.request({
        method: 'GET',
        url: `/booking?checkout=${checkout}&checkout=${checkout}`,
        failOnStatusCode: false 
    })
})

// GET
Cypress.Commands.add('getBookingCheckinAndCheckoutAndName', (name, checkin, checkout) => {
    cy.request({
        method: 'GET',
        url: `/booking?firstname=${name}&checkin=${checkin}&checkout=${checkout}`,
        failOnStatusCode: false 
    })
})

//POST
Cypress.Commands.add('token', () => {
    cy.request({
        method: 'POST',
        url: '/auth',
        failOnStatusCode: false,
        headers:{
            accept: 'application/json'
        },
        body:{
            "username": "admin",
            "password": "password123"
        } 
    })
})

//POST
Cypress.Commands.add('postBookin', () => {
    cy.request({
        method: 'POST',
        url: `/booking`,        
        failOnStatusCode: false,
        headers:{
            accept: 'application/json'          
        }, 
        body:{
            "firstname": "Testador",
            "lastname": "Junior",
            "totalprice": 100,
            "depositpaid": true,
            "bookingdates":{
                "checkin": "2020-07-15",
                "checkout": "2020-07-20"
            },
            "additionalsneeds": "Breakfast"
        }
    })
})

// PUT
Cypress.Commands.add('updateBookingWithToken', (id, token) => {
    cy.request({
        method: 'PUT',
        url: `/booking/${id}`,        
        failOnStatusCode: false,
        headers:{
            accept: 'application/json',
            cookie: `token=${token}`
        }, 
        body:{
            "firstname": "João",
            "lastname": "Silva",
            "totalprice": 150,
            "depositpaid": true,
            "bookingdates":{
                "checkin": "2020-07-15",
                "checkout": "2020-07-20"
            },
            "additionalsneeds": "Breakfast"
        }
    })
})

// PUT
Cypress.Commands.add('updateBookingwithoutToken', (id) => {
    cy.request({
        method: 'PUT',
        url: `/booking/${id}`,        
        failOnStatusCode: false,  
        body:{
            "firstname": "João",
            "lastname": "Silva",
            "totalprice": 150,
            "depositpaid": true,
            "bookingdates":{
                "checkin": "2020-07-15",
                "checkout": "2020-07-20"
            },
            "additionalsneeds": "Breakfast"
        }
    })
})

// DELETE
Cypress.Commands.add('deleteBookingId', (id, token) => {
    cy.request({
        method: 'DELETE',
        url: `/booking/${id}`,
        failOnStatusCode: false,
        headers:{
            accept: 'application/json',
            cookie: `token=${token}`
        }, 
    })
})