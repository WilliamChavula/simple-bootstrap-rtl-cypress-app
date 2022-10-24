import { render, screen, within } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import '@testing-library/jest-dom';
import 'cross-fetch/polyfill';

import CharacterDetail from '../../src/pages/CharacterDetail';
import mockData from '../../cypress/fixtures/ricky-and-morty.json';

const server = setupServer(
    rest.get('https://rickandmortyapi.com/api/character/1', (req, res, ctx) => {
        return res(ctx.json(mockData.results[0]));
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

    it('should render character detail when navigated to page', async () => {
        render(
            <MemoryRouter initialEntries={['/character/1']}>
                <Routes>
                    <Route
                        path="/character/:id"
                        element={<CharacterDetail />}
                    />
                </Routes>
            </MemoryRouter>
        );

        const charFigure = await screen.findByRole('figure');
        expect(charFigure).toBeVisible();

        const captions = await within(charFigure).findAllByTestId('figcaption');
        expect(captions.length).toBe(5);
    });
});
