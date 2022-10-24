/* eslint-disable no-undef */
/// <reference types="cypress" />

describe('Home Page', function () {
    beforeEach(function () {
        cy.visit('http://localhost:8080/');
    });

    afterAll(function () {
        cy.visit('http://localhost:8080/');
    });

    describe('Index Page', () => {
        it('Should have Brand Name in NavBar', () => {
            cy.get('.navbar').contains('Ricky and Monty');
        });

        it('Should have a total of 20 elements displayed in Grid', () => {
            // This test is flaky because it depends on a number data items from API
            // cy.get('.col-xs-12').should('have.length.above', 5);

            cy.get('.row > .col-xs-12').should('have.length.above', 5);
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
