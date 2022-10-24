/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Intercept API request', function () {
    beforeEach(function () {
        // OPTION 1: STUB WITH FIXTURE DIRECTLY IN INTERCEPT CALL
        // cy.intercept('GET', 'https://rickandmortyapi.com/api/character', {
        //     fixture: 'ricky-and-morty.json',
        // });

        // OPTION 2: LOAD FIXTURE USING FIXTURE() CALL, AND STUB INTERCEPT
        cy.fixture('ricky-and-morty').then(data => {
            cy.intercept(
                'GET',
                'https://rickandmortyapi.com/api/character',
                data
            );
        });

        cy.visit('http://localhost:8080/');
    });

    describe('Test Data Stub', () => {
        it('Should have Brand Name in NavBar', () => {
            cy.get('.navbar').contains('Ricky and Monty');
        });

        it('Should have a total of 2 elements displayed in Grid', () => {
            // cy.get('.col-xs-12').should('have.length.above', 2);

            cy.get('.row > .col-xs-12').should('have.length', 2);
        });

        it('Should Contain Card with title', () => {
            cy.get('.card .card-title').eq(1).should('contain.text', 'Morty');
        });
    });

    describe('CharacterDetail Page', () => {
        it('Should interact with Card and navigate to detail page', () => {
            cy.get('.card-title').contains('Rick Sanchez').click();

            cy.url().should('include', '/character/1');
        });

        it('Should interact with Card and navigate to detail page', () => {
            cy.get('.card-title').contains('Rick Sanchez').click();

            cy.get('.figure')
                .find('.figure-caption')
                .contains('Name: Rick Sanchez')
                .should('not.be.undefined');

            cy.get('.figure')
                .find('.figure-caption')
                .contains('Gender: Male')
                .should('not.be.undefined');

            cy.get('.figure')
                .find('.figure-caption')
                .contains('Species: Human')
                .should('not.be.undefined');

            cy.get('.figure figcaption:first').should(
                'contain.text',
                'Name: Rick Sanchez'
            );
        });
    });
});
