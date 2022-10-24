import { render, screen, waitFor, within } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import 'cross-fetch/polyfill';

import CharactersList from '../../src/pages/CharactersList';

import mockData from '../../cypress/fixtures/ricky-and-morty.json';

const server = setupServer(
    rest.get('https://rickandmortyapi.com/api/character', (req, res, ctx) => {
        return res(ctx.json(mockData));
    })
);

describe('Character List Component', function () {
    beforeAll(function () {
        server.listen();
    });

    afterEach(function () {
        server.resetHandlers();
    });

    afterAll(function () {
        server.close();
    });
    test('should render loading spinner when still fetching data', async () => {
        render(<CharactersList data={null} loading={true} />);

        await waitFor(() => screen.getByTestId('spinner'));
        const loadingSpinner = screen.getByTestId('spinner');
        expect(loadingSpinner).toBeVisible();
    });

    test('should render list of characters after successfully fetching data', async () => {
        render(
            <MemoryRouter initialEntries={['/']}>
                <Routes>
                    <Route path="/" element={<CharactersList />} />
                </Routes>
            </MemoryRouter>
        );

        const charContainer = await screen.findByTestId('character-container');
        const cards = within(charContainer).getAllByTestId('card');

        expect(charContainer).toBeInTheDocument();
        expect(charContainer).toHaveClass('row');

        expect(cards.length).toBe(2);
    });
});
